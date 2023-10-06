export interface SiteConfig {
    siteName: string;
    description: string;
    currentlyAt: string;
    socialLinks: {
        twitter: string;
        youtube: string;
        github: string;
        linkedin: string;
        instagram: string;
    };
}

const siteConfig : SiteConfig = {
    siteName: 'Explorer',
    description: 'A minimal and lovely travel blog which shares experience and citiest around the world',
    currentlyAt: 'Budapest',
    socialLinks: {
        twitter: 'https://twitter.com/blackghost',
        youtube: 'https://youtube/@blackghost',
        github: 'https://github.com/WebDeveloper0315',
        linkedin: 'https://linkedin.com/blackghost',
        instagram: 'https://instagram.com/blackghost',
    },
}

export default siteConfig