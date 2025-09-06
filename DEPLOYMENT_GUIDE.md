# OurTopClinic Landing Page - Deployment Guide

## 🚀 Deployment Strategy

This project will be deployed in two stages:

### Stage 1: Vercel Development/Testing
- **URL**: `ourtopclinic-new.vercel.app`
- **Purpose**: Development, testing, and client approval
- **Configuration**: No basePath (serves at root)

### Stage 2: Production Proxy Setup
- **URL**: `ourtopclinic.com/NorthPalmBeach`
- **Purpose**: Live production site
- **Configuration**: With basePath for subdirectory deployment

## 🔧 Configuration Details

### Next.js Configuration
The `next.config.js` is set up to automatically handle both scenarios:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/NorthPalmBeach' : ''
```

- **Development/Testing**: No basePath (empty string)
- **Production**: Uses `/NorthPalmBeach` basePath

## 🌐 Proxy Setup for Production

### Option 1: Nginx Proxy (Recommended)
Add this to your main website's nginx configuration:

```nginx
location /NorthPalmBeach/ {
    proxy_pass https://ourtopclinic-new.vercel.app/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    
    # Handle static assets
    location ~* /NorthPalmBeach/_next/static/ {
        proxy_pass https://ourtopclinic-new.vercel.app/_next/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Option 2: Apache Proxy
Add this to your `.htaccess` or virtual host:

```apache
RewriteEngine On
RewriteRule ^NorthPalmBeach/(.*)$ https://ourtopclinic-new.vercel.app/$1 [P,L]
```

### Option 3: Cloudflare Workers
Create a Cloudflare Worker:

```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  if (url.pathname.startsWith('/NorthPalmBeach/')) {
    const newUrl = new URL(request.url)
    newUrl.hostname = 'ourtopclinic-new.vercel.app'
    newUrl.pathname = url.pathname.replace('/NorthPalmBeach', '')
    
    return fetch(newUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    })
  }
  
  return fetch(request)
}
```

## 📋 Deployment Steps

### For Vercel Testing:
1. Deploy to Vercel (current setup)
2. Test at `ourtopclinic-new.vercel.app`
3. Verify all functionality works

### For Production:
1. Set up proxy configuration on main website
2. Test the proxy at `ourtopclinic.com/NorthPalmBeach`
3. Verify all assets and navigation work correctly

## 🔍 Testing Checklist

- [ ] Logo displays correctly
- [ ] Navigation links work (internal scroll + external)
- [ ] All images load properly
- [ ] Forms submit correctly
- [ ] Mobile responsiveness
- [ ] SEO metadata works

## 🚨 Important Notes

1. **Static Assets**: The proxy must handle `/_next/static/` paths correctly
2. **API Routes**: Any API routes will also be proxied
3. **Caching**: Set appropriate cache headers for static assets
4. **SSL**: Ensure HTTPS is maintained through the proxy

## 🔄 Rollback Plan

If issues occur:
1. Update proxy to point to a previous Vercel deployment
2. Or temporarily redirect to Vercel URL
3. Fix issues and redeploy
