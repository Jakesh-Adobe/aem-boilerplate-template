/*
 * Embed Block
 * Show videos and social posts directly on your page.
 * https://www.aem.live/developer/block-collection/embed
 */

const loadScript = (url, callback, type) => {
  const head = document.querySelector('head');
  const script = document.createElement('script');
  script.src = url;
  if (type) script.setAttribute('type', type);
  script.onload = callback;
  head.append(script);
  return script;
};

const getDefaultEmbed = (url) => `<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
    <iframe src="${url.href}" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen=""
      scrolling="no" allow="encrypted-media" title="Content from ${url.hostname}" loading="lazy">
    </iframe>
  </div>`;

const embedYoutube = (url, autoplay) => {
  const usp = new URLSearchParams(url.search);
  const suffix = autoplay ? '&muted=1&autoplay=1' : '';
  let vid = usp.get('v') ? encodeURIComponent(usp.get('v')) : '';
  const embed = url.pathname;
  if (url.origin.includes('youtu.be')) {
    [, vid] = url.pathname.split('/');
  }
  return `<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
      <iframe src="https://www.youtube.com${vid ? `/embed/${vid}?rel=0&v=${vid}${suffix}` : embed}" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;"
      allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope; picture-in-picture" allowfullscreen="" scrolling="no" title="Content from Youtube" loading="lazy"></iframe>
    </div>`;
};

const embedVimeo = (url, autoplay) => {
  const [, video] = url.pathname.split('/');
  const suffix = autoplay ? '?muted=1&autoplay=1' : '';
  return `<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
      <iframe src="https://player.vimeo.com/video/${video}${suffix}"
      style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;"
      frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
      title="Content from Vimeo" loading="lazy"></iframe>
    </div>`;
};

const embedTwitter = (url) => {
  console.log('embedTwitter called with:', url.href);
  const tweetHtml = `<blockquote class="twitter-tweet"><a href="${url.href}"></a></blockquote>`;
  return tweetHtml;
};

const loadEmbed = (block, link, autoplay) => {
  console.log('loadEmbed called with:', { link, autoplay });
  
  if (block.classList.contains('embed-is-loaded')) {
    console.log('Embed already loaded, skipping');
    return;
  }

  const embedsConfig = [
    {
      match: ['youtube', 'youtu.be'],
      embed: embedYoutube,
    },
    {
      match: ['vimeo'],
      embed: embedVimeo,
    },
    {
      match: ['twitter', 'x.com'],
      embed: embedTwitter,
    },
  ];

  const config = embedsConfig.find((e) => e.match.some((match) => link.includes(match)));
  console.log('Embed config found:', config?.match);
  
  try {
    const url = new URL(link);
    console.log('URL parsed successfully:', url.hostname);
    
    if (config) {
      const embedHtml = config.embed(url, autoplay);
      console.log('Generated embed HTML:', embedHtml.substring(0, 100));
      block.innerHTML = embedHtml;
      block.className = `block embed embed-${config.match[0]}`;
      
      // For Twitter embeds, load widget script and reprocess
      if (link.includes('twitter.com') || link.includes('x.com')) {
        console.log('Twitter embed detected, loading widget script');
        
        // If script already loaded, just process the widget
        if (window.twttr && window.twttr.widgets && window.twttr.widgets.load) {
          console.log('Twitter widget already loaded, processing');
          setTimeout(() => {
            window.twttr.widgets.load();
          }, 100);
        } else {
          // Load the Twitter widget script
          console.log('Loading Twitter widget script');
          loadScript('https://platform.twitter.com/widgets.js', () => {
            console.log('Twitter widget script loaded, processing');
            if (window.twttr && window.twttr.widgets && window.twttr.widgets.load) {
              window.twttr.widgets.load();
            }
          });
        }
      }
    } else {
      console.log('No specific config, using default embed');
      block.innerHTML = getDefaultEmbed(url);
      block.className = 'block embed';
    }
  } catch (error) {
    console.error('Embed loading error:', error, link);
    block.innerHTML = `<p style="color: red; padding: 20px;">Error loading embed for: <a href="${link}">${link}</a></p>`;
  }
  block.classList.add('embed-is-loaded');
  console.log('Embed loading complete, final HTML:', block.innerHTML.substring(0, 150));
};

export default function decorate(block) {
  const placeholder = block.querySelector('picture');
  
  // Debug: log what we're working with
  console.log('Embed block decorator running', {
    blockClass: block.className,
    blockHTML: block.innerHTML.substring(0, 200),
  });
  
  // Method 1: Find direct link in anchor tags
  let link = block.querySelector('a')?.href;
  console.log('Method 1 - Direct anchor search:', link);
  
  // Method 2: Find all text and extract URL
  if (!link) {
    const allText = block.textContent;
    console.log('Method 2 - Searching in text:', allText.substring(0, 150));
    
    // Look for URLs in any format
    const urlPatterns = [
      /https?:\/\/(www\.)?(youtube|youtu\.be|vimeo|twitter|x\.com)[^\s]*/gi,
      /https?:\/\/[^\s]*/i
    ];
    
    for (const pattern of urlPatterns) {
      const match = allText.match(pattern);
      if (match) {
        link = match[0];
        console.log('Found URL with pattern:', link);
        break;
      }
    }
  }
  
  console.log('Final link found:', link);
  
  if (!link) {
    console.error('Embed block: no valid link found in', block.innerHTML);
    block.innerHTML = '<p style="color: red; padding: 20px; background: #ffe0e0; border: 1px solid #ff0000;">Error: No embed URL found. Please add a YouTube, Vimeo, or Twitter URL.</p>';
    return;
  }
  
  // Clear the block content
  block.textContent = '';

  if (placeholder) {
    const wrapper = document.createElement('div');
    wrapper.className = 'embed-placeholder';
    wrapper.innerHTML = '<div class="embed-placeholder-play"><button type="button" title="Play"></button></div>';
    wrapper.prepend(placeholder);
    wrapper.addEventListener('click', () => {
      loadEmbed(block, link, true);
    });
    block.append(wrapper);
  } else {
    // Use a small timeout to ensure DOM is ready, then load
    setTimeout(() => {
      loadEmbed(block, link);
    }, 100);
  }
}