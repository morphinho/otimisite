/**
 * Master script to generate 6 blog posts with content and images
 * - Generates content using agent system
 * - Generates all images in parallel
 * - Updates blog posts file
 */

const { generateAllContent, topics } = require('./generate-content');
const { generateImages } = require('./generate-images');
const fs = require('fs');
const path = require('path');

// Generate image prompts for new topics
function generateImagePrompts(posts) {
  return posts.map(post => {
    const keyword = post.slug.replace(/-/g, ' ');
    let prompt = '';
    
    // Generate prompt based on topic
    if (post.slug.includes('retirement')) {
      prompt = 'Retirement planning strategies: professional financial infographic showing retirement timeline, savings growth charts, and investment strategies. Laptop screen displaying retirement calculator and financial projections. Blue and green tones, modern design with charts and graphs. Financial planning concept.';
    } else if (post.slug.includes('investment') || post.slug.includes('portfolio')) {
      prompt = 'Investment portfolio diversification: professional dashboard showing diversified investment portfolio with stocks, bonds, real estate, and other assets. Pie charts, bar graphs, and financial metrics displayed on computer screen. Blue and green color scheme, modern financial visualization. Investment strategy concept.';
    } else if (post.slug.includes('debt')) {
      prompt = 'Debt consolidation vs debt settlement: comparison infographic showing two paths to debt management. Split screen with organized debt consolidation on one side and debt settlement process on the other. Calculator, documents, and financial symbols. Professional finance concept with blue and green tones.';
    } else if (post.slug.includes('emergency')) {
      prompt = 'Emergency fund planning: financial security concept showing savings calculator, piggy bank, and emergency fund growth chart. Laptop displaying emergency fund calculator with target amounts and timeline. Calming blue and green colors, sense of financial security and preparedness.';
    } else if (post.slug.includes('tax')) {
      prompt = 'Tax optimization strategies: professional tax planning dashboard showing tax savings calculations, deductions, and optimization strategies. Computer screen displaying tax forms, calculators, and financial documents. Blue and green tones, professional tax planning concept.';
    } else if (post.slug.includes('real-estate')) {
      prompt = 'Real estate investment for beginners: educational infographic showing real estate investment basics, property types, and investment strategies. House icons, growth charts, and real estate symbols. Laptop displaying real estate investment calculator. Professional finance concept with blue and green accents.';
    } else {
      // Generic financial prompt
      prompt = `Professional financial infographic about ${keyword}: laptop screen displaying financial charts, graphs, and data visualization. Modern design with blue and green tones, showing financial concepts and strategies. Clean, professional finance concept.`;
    }
    
    return {
      filename: `${post.slug}.jpg`,
      prompt: prompt,
      aspect_ratio: '1:1',
      resolution: '2K',
      output_format: 'jpg'
    };
  });
}

// Update blog posts file
function updateBlogPostsFile(posts) {
  const blogPostFile = path.join(process.cwd(), 'app', 'blog', '[slug]', 'page.tsx');
  let content = fs.readFileSync(blogPostFile, 'utf8');
  
  // Find the closing brace before generateStaticParams
  const marker = '}\n\n// Generate static paths';
  const markerIdx = content.indexOf(marker);
  
  if (markerIdx === -1) {
    console.error('❌ Could not find blogPosts closing brace in file');
    return false;
  }
  
  // Generate new posts entries
  const newPostsEntries = posts.map(post => {
    // Escape content properly for template literal
    const contentEscaped = post.content
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\${/g, '\\${');
    
    return `  '${post.slug}': {
    title: '${post.title.replace(/'/g, "\\'")}',
    excerpt: '${post.excerpt.replace(/'/g, "\\'")}',
    date: '${post.date}',
    author: '${post.author}',
    category: '${post.category}',
    image: '${post.image}',
    imageAlt: '${post.imageAlt}',
    content: \`
${contentEscaped}
    \`,
  },`;
  }).join('\n\n');
  
  // Insert new posts before the closing brace
  const before = content.substring(0, markerIdx);
  const after = content.substring(markerIdx);
  
  const newContent = before + newPostsEntries + '\n\n' + after;
  
  fs.writeFileSync(blogPostFile, newContent, 'utf8');
  console.log(`✅ Updated blog posts file: ${blogPostFile}`);
  return true;
}

// Main function
async function generateAll() {
  console.log('🚀 Starting complete generation process...\n');
  console.log('=' .repeat(60));
  
  try {
    // Step 1: Generate content
    console.log('\n📝 STEP 1: Generating content...');
    console.log('-'.repeat(60));
    const posts = await generateAllContent();
    
    if (posts.length === 0) {
      throw new Error('No posts generated');
    }
    
    // Step 2: Generate images in parallel
    console.log('\n\n📸 STEP 2: Generating images in parallel...');
    console.log('-'.repeat(60));
    const imageConfigs = generateImagePrompts(posts);
    await generateImages(imageConfigs);
    
    // Step 3: Update blog posts file
    console.log('\n\n📄 STEP 3: Updating blog posts file...');
    console.log('-'.repeat(60));
    updateBlogPostsFile(posts);
    
    // Step 4: Update blog listing page
    console.log('\n\n📋 STEP 4: Updating blog listing page...');
    console.log('-'.repeat(60));
    updateBlogListingPage(posts);
    
    console.log('\n' + '='.repeat(60));
    console.log('✨ All done! Generated 6 blog posts with content and images.');
    console.log('='.repeat(60));
    
  } catch (error) {
    console.error('\n❌ Error during generation:', error);
    process.exit(1);
  }
}

// Update blog listing page
function updateBlogListingPage(posts) {
  const blogListingFile = path.join(process.cwd(), 'app', 'blog', 'page.tsx');
  let content = fs.readFileSync(blogListingFile, 'utf8');
  
  // Find blogPosts array
  const startMarker = 'const blogPosts = [';
  const endMarker = ']';
  
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) {
    console.log('⚠️  Could not find blogPosts array, skipping...');
    return;
  }
  
  // Find the end of the array
  let braceCount = 0;
  let endIdx = startIdx + startMarker.length;
  let inString = false;
  let stringChar = '';
  
  for (let i = endIdx; i < content.length; i++) {
    const char = content[i];
    const prevChar = i > 0 ? content[i - 1] : '';
    
    if (!inString && (char === '"' || char === "'" || char === '`')) {
      inString = true;
      stringChar = char;
    } else if (inString && char === stringChar && prevChar !== '\\') {
      inString = false;
    } else if (!inString) {
      if (char === '{') braceCount++;
      if (char === '}') braceCount--;
      if (braceCount === 0 && char === ']') {
        endIdx = i + 1;
        break;
      }
    }
  }
  
  // Generate new posts entries
  const newPostsEntries = posts.map(post => {
    return `  {
    id: '${post.slug}',
    title: '${post.title.replace(/'/g, "\\'")}',
    excerpt: '${post.excerpt.replace(/'/g, "\\'")}',
    date: '${post.date}',
    author: '${post.author}',
    category: '${post.category}',
    image: '${post.image}',
  },`;
  }).join('\n');
  
  // Replace the array
  const before = content.substring(0, startIdx + startMarker.length);
  const after = content.substring(endIdx);
  
  const newContent = before + '\n' + newPostsEntries + '\n' + after;
  
  fs.writeFileSync(blogListingFile, newContent, 'utf8');
  console.log(`✅ Updated blog listing page: ${blogListingFile}`);
}

// Run if executed directly
if (require.main === module) {
  generateAll().catch(console.error);
}

module.exports = { generateAll };

