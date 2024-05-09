export const seo = {
  title: 'PX.FE | 开发者、独立产品、生活、钓鱼',
  description:
    '这里 PX.FE，一名独立开发者，目前正探索独立产品的可行性。ps：同时也是位空军佬。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://pxfe.top'
      : 'http://localhost:3000'
  ),
} as const
