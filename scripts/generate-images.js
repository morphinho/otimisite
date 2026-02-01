/**
 * Script to generate blog post images using Kie AI API
 * Model: nano-banana-pro
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const API_KEY = '82a02171793197367e1e96556b098c77';
const API_BASE = 'https://api.kie.ai/api/v1';

// Image configurations for each blog post
const imageConfigs = [
  {
    filename: 'personal-cash-flow.jpg',
    prompt: 'Professional financial infographic showing cash flow optimization: laptop screen displaying financial charts and graphs in blue and green tones, showing income streams, expense management, and strategic financial leverage. Modern, clean design with data visualization elements. Business finance concept.',
    aspect_ratio: '1:1',
    resolution: '2K',
    output_format: 'jpg'
  },
  {
    filename: 'digital-security.jpg',
    prompt: 'Digital security in financial platforms: laptop screen showing a digital safe with blue fingerprint scanner icon in center. Dark blue background with subtle digital patterns. Security lock icon and blue checkmark visible. Modern fintech security concept, professional and secure.',
    aspect_ratio: '1:1',
    resolution: '2K',
    output_format: 'jpg'
  },
  {
    filename: 'advanced-budgeting.jpg',
    prompt: 'Advanced budgeting techniques visualization: desktop computer displaying financial graph with upward trend. Small house, money bag, and green upward arrow with multiple segments representing growth. Small tree visible. Financial planning dashboard with charts. Professional finance concept.',
    aspect_ratio: '1:1',
    resolution: '2K',
    output_format: 'jpg'
  },
  {
    filename: 'financial-literacy.jpg',
    prompt: 'Building financial literacy skills: educational infographic showing money management concepts. Books, calculator, charts, and financial symbols arranged professionally. Light background with blue and green accents. Learning and education theme. Clean, informative design.',
    aspect_ratio: '1:1',
    resolution: '2K',
    output_format: 'jpg'
  },
  {
    filename: 'financial-stress.jpg',
    prompt: 'Reducing personal financial stress: calming financial wellness concept. Peaceful scene with organized financial documents, calculator, and positive financial symbols. Soft colors, green plants, and sense of order and control. Stress relief and financial peace theme.',
    aspect_ratio: '1:1',
    resolution: '2K',
    output_format: 'jpg'
  }
];

// Helper function to make API requests
function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const requestOptions = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: options.method || 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        ...options.headers
      }
    };

    const req = https.request(requestOptions, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    });

    req.on('error', reject);

    if (options.body) {
      req.write(JSON.stringify(options.body));
    }

    req.end();
  });
}

// Create image generation task
async function createTask(config) {
  console.log(`\n📸 Creating task for: ${config.filename}`);
  console.log(`   Prompt: ${config.prompt.substring(0, 80)}...`);

  const response = await makeRequest(`${API_BASE}/jobs/createTask`, {
    method: 'POST',
    body: {
      model: 'nano-banana-pro',
      input: {
        prompt: config.prompt,
        aspect_ratio: config.aspect_ratio,
        resolution: config.resolution,
        output_format: config.output_format
      }
    }
  });

  if (response.code === 200) {
    console.log(`   ✅ Task created: ${response.data.taskId}`);
    return response.data.taskId;
  } else {
    throw new Error(`Failed to create task: ${response.message}`);
  }
}

// Query task status
async function queryTask(taskId) {
  const response = await makeRequest(`${API_BASE}/jobs/recordInfo?taskId=${taskId}`);
  
  if (response.code === 200) {
    return response.data;
  } else {
    throw new Error(`Failed to query task: ${response.message}`);
  }
}

// Wait for task to complete
async function waitForCompletion(taskId, maxAttempts = 60, interval = 5000) {
  console.log(`   ⏳ Waiting for generation...`);
  
  for (let i = 0; i < maxAttempts; i++) {
    const taskData = await queryTask(taskId);
    
    console.log(`   Status: ${taskData.state} (attempt ${i + 1}/${maxAttempts})`);
    
    if (taskData.state === 'success') {
      const result = JSON.parse(taskData.resultJson);
      console.log(`   ✅ Generation completed!`);
      return result.resultUrls[0];
    }
    
    if (taskData.state === 'fail') {
      throw new Error(`Generation failed: ${taskData.failMsg}`);
    }
    
    // Wait before next check
    await new Promise(resolve => setTimeout(resolve, interval));
  }
  
  throw new Error('Task timeout - generation took too long');
}

// Download image from URL
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

// Main function
async function generateImages() {
  console.log('🚀 Starting image generation...\n');
  console.log(`📁 Images will be saved to: public/images/\n`);

  // Ensure directory exists
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  for (const config of imageConfigs) {
    try {
      // Create task
      const taskId = await createTask(config);
      
      // Wait for completion
      const imageUrl = await waitForCompletion(taskId);
      
      // Download image
      const filepath = path.join(imagesDir, config.filename);
      console.log(`   📥 Downloading to: ${config.filename}`);
      await downloadImage(imageUrl, filepath);
      console.log(`   ✅ Saved: ${config.filename}\n`);
      
      // Small delay between requests
      await new Promise(resolve => setTimeout(resolve, 2000));
      
    } catch (error) {
      console.error(`   ❌ Error generating ${config.filename}:`, error.message);
      console.log(`   Continuing with next image...\n`);
    }
  }

  console.log('✨ Image generation complete!');
}

// Run if executed directly
if (require.main === module) {
  generateImages().catch(console.error);
}

module.exports = { generateImages };

