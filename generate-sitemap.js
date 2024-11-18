const fs = require('fs');
const path = require('path');

// Caminho para salvar o sitemap.xml
const outputPath = path.resolve(__dirname, 'sitemap.xml');


// URLs para o sitemap
const urls = [
    { loc: 'https://vertex-systems.vercel.app/#/', changefreq: 'daily', priority: 1.0 },
    { loc: 'https://vertex-systems.vercel.app/#/nossas-solucoes', changefreq: 'weekly', priority: 0.8 },
    { loc: 'https://vertex-systems.vercel.app/#/tecnologias', changefreq: 'weekly', priority: 0.8 },
    { loc: 'https://vertex-systems.vercel.app/#/quem-somos', changefreq: 'monthly', priority: 0.7 },
    { loc: 'https://vertex-systems.vercel.app/#/fale-conosco', changefreq: 'monthly', priority: 0.7 },
    { loc: 'https://vertex-systems.vercel.app/#/politica-de-privacidade', changefreq: 'yearly', priority: 0.5 },
    { loc: 'https://vertex-systems.vercel.app/#/certificados', changefreq: 'yearly', priority: 0.6 },
    { loc: 'https://vertex-systems.vercel.app/#/projetos', changefreq: 'weekly', priority: 0.8 },
];

// Dados dos projetos (importar ou adicionar diretamente)
const projects = [
    { id: 'atlas-almoxarifado', loc: 'https://vertex-systems.vercel.app/#/projeto/atlas-almoxarifado' },
    { id: 'sistema-de-cardapio', loc: 'https://vertex-systems.vercel.app/#/projeto/sistema-de-cardapio' },
    { id: 'assinaturas-corporativas', loc: 'https://vertex-systems.vercel.app/#/projeto/assinaturas-corporativas' },
    { id: 'lockguard', loc: 'https://vertex-systems.vercel.app/#/projeto/lockguard' },
    { id: 'estudio-de-beleza', loc: 'https://vertex-systems.vercel.app/#/projeto/estudio-de-beleza' },
];

// Início do sitemap
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Adicionar URLs estáticas
urls.forEach((url) => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${url.loc}</loc>\n`;
    sitemap += `    <changefreq>${url.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${url.priority}</priority>\n`;
    sitemap += `  </url>\n`;
});

// Adicionar URLs dinâmicas (projetos)
projects.forEach((project) => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${project.loc}</loc>\n`;
    sitemap += `    <changefreq>weekly</changefreq>\n`;
    sitemap += `    <priority>0.7</priority>\n`;
    sitemap += `  </url>\n`;
});

// Fim do sitemap
sitemap += `</urlset>`;

// Salvar o arquivo sitemap.xml
fs.writeFileSync(outputPath, sitemap);

console.log('Sitemap gerado com sucesso em:', outputPath);
