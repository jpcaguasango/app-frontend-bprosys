This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Install the dependencies:

```bash
npm install
# or
yarn install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Poppins](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Landing Page para Fintech

## Preguntas Complementarias

### 1. ¿Qué criterios seguiste para diseñar la UI de productos financieros?

Para el diseño, me enfoqué en que fuera claro, fácil de entender y que transmitiera confianza. Usé una estructura limpia, con tipografía legible (Poppins) y colores sobrios, como azules y verdes, que dan esa sensación de "financiero". Para los detalles como tasas de interés o rendimiento, los puse con etiquetas claras y un buen espaciado, así los usuarios pueden comparar sin esfuerzo. También traté de seguir patrones de diseño típicos de fintechs modernas, asegurándome de que sea fácil de usar en móvil.

### 2. ¿Cómo decidiste cuándo usar Tailwind y cuándo Styled Components?

En este proyecto, decidí usar solo Tailwind CSS para todo. Al principio consideré usar Styled Components, pero no lo vi necesario en ningún momento porque la mayor parte de la UI podía resolverse fácilmente con las utilidades de Tailwind. Tailwind me permitió tener un control rápido y directo sobre el layout, espaciado y colores, lo que me ayudó a mantener la consistencia visual sin complicarme con componentes adicionales. Como todo lo que necesitaba era control de estilos globales y no tenía componentes demasiado dinámicos o específicos, no sentí que fuera necesario usar algo como Styled Components.

### 3. ¿Qué harías para escalar este proyecto en una aplicación real de banca digital?

Para escalarlo, empezaría modularizando todo en carpetas, como para productos, usuarios, autenticación, etc. Usaría una arquitectura que me permita trabajar más ordenado. Luego, integraría una API real, probablemente GraphQL o algo que sea fácil de mantener y que me permita que el frontend y backend se comuniquen bien. Para la gestión del estado, usaría algo como Zustand o React Query. También no olvidaría la internacionalización y la accesibilidad. A nivel de seguridad, metería autenticación y control de roles, y también haría pruebas end-to-end con Cypress para asegurar que todo funcione bien.

### 4. ¿Qué herramientas usarías para mejorar el rendimiento y monitoreo en producción?

Para el rendimiento, usaría Vercel Analytics o las métricas de Next.js, como LCP o FID, para tener un buen control sobre cómo está funcionando todo. También metería Lighthouse CI en el pipeline para hacer auditorías de accesibilidad y rendimiento. Para monitorear errores en tiempo real, usaría Sentry o LogRocket. Si el tamaño del bundle se va haciendo grande, usaba Bundle Analyzer para ver qué puedo mejorar. Además, aprovecharía el lazy loading para las partes más pesadas y usaría SWR o React Query para manejar bien los datos y no olvidaría caching con un CDN para los estáticos.
