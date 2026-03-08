import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // Dica: adicione para validar DTOs

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração de CORS ajustada
  app.enableCors({
    origin: true, // Isso faz o Nest refletir a origem da requisição, aceitando qualquer uma.
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Global Pipe (opcional, mas recomendado para o Prisma não receber lixo)
  app.useGlobalPipes(new ValidationPipe());

  // Na Vercel, o listen é apenas formal, mas o host 0.0.0.0 ajuda na compatibilidade
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();