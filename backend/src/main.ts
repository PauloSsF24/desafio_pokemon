import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // Dica: adicione para validar DTOs

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração de CORS ajustada
// No seu backend/src/main.ts
  app.enableCors({
    origin: (origin, callback) => {
      // Isso permite qualquer origem que venha da Vercel ou localhost
      if (!origin || origin.includes('vercel.app') || origin.includes('localhost')) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization',
  });

  // Global Pipe (opcional, mas recomendado para o Prisma não receber lixo)
  app.useGlobalPipes(new ValidationPipe());

  // Na Vercel, o listen é apenas formal, mas o host 0.0.0.0 ajuda na compatibilidade
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();