<script lang="ts">
  import type { BlogPost } from '$lib/types';
  
  let { post, featured = false } = $props<{
    post: BlogPost;
    featured?: boolean;
  }>();
  
  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(date).toLocaleDateString('es-ES', options);
  };
  
  const readingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min de lectura`;
  };
</script>

<article class="blog-card group {featured ? 'featured' : ''}">
  <a href="/articulos/{post.slug}" class="block h-full">
    <div class="card-content">
      <!-- Meta information -->
      <div class="meta">
        {#if post.category}
          <span class="category">{post.category}</span>
          <span class="separator">·</span>
        {/if}
        <span class="reading-time">{readingTime(post.content || '')}</span>
      </div>
      
      <!-- Title -->
      <h3 class="title">
        {post.title}
      </h3>
      
      <!-- Description -->
      {#if post.description}
        <p class="description">
          {post.description}
        </p>
      {/if}
      
      <!-- Date -->
      <time class="date" datetime={post.date}>
        {formatDate(post.date)}
      </time>
    </div>
  </a>
</article>

<style>
  .blog-card {
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
    overflow: hidden;
  }
  
  .blog-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }
  
  .blog-card.featured {
    grid-column: span 2;
  }
  
  .card-content {
    padding: var(--space-6);
  }
  
  .meta {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
    margin-bottom: var(--space-3);
  }
  
  .category {
    color: var(--color-primary);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .separator {
    opacity: 0.5;
  }
  
  .title {
    font-size: var(--font-size-xl);
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: var(--space-3);
    color: var(--color-text);
    transition: color var(--transition-fast);
  }
  
  .group:hover .title {
    color: var(--color-primary);
  }
  
  .description {
    color: var(--color-text-muted);
    line-height: 1.6;
    margin-bottom: var(--space-4);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .date {
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .blog-card.featured {
      grid-column: span 1;
    }
    
    .card-content {
      padding: var(--space-4);
    }
    
    .title {
      font-size: var(--font-size-lg);
    }
  }
</style>