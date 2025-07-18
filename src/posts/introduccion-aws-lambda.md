---
title: 'Introducción a AWS Lambda: Serverless en la práctica'
date: '2023-11-28'
description: 'Descubre cómo crear funciones serverless con AWS Lambda y sus casos de uso más comunes.'
published: true
tags: ['aws', 'serverless', 'cloud', 'backend']
---

AWS Lambda revolucionó la forma en que desplegamos aplicaciones al eliminar la necesidad de gestionar servidores. En este artículo, exploraremos qué es Lambda, cómo funciona y construiremos nuestra primera función.

## ¿Qué es AWS Lambda?

AWS Lambda es un servicio de computación serverless que ejecuta tu código en respuesta a eventos. Solo pagas por el tiempo de computación que consumes - no hay cargo cuando tu código no se está ejecutando.

## Ventajas de Lambda

### 1. Sin gestión de servidores
No necesitas aprovisionar, escalar o mantener servidores. AWS se encarga de todo.

### 2. Escalado automático
Lambda escala automáticamente tu aplicación ejecutando código en respuesta a cada trigger.

### 3. Pago por uso
Solo pagas por el tiempo de computación consumido. Los primeros 1 millón de solicitudes al mes son gratis.

### 4. Integración con servicios AWS
Lambda se integra perfectamente con más de 200 servicios de AWS.

## Casos de uso comunes

- **APIs RESTful**: Usa API Gateway + Lambda para crear APIs escalables
- **Procesamiento de archivos**: Procesa imágenes o documentos cuando se suben a S3
- **Tareas programadas**: Ejecuta código en horarios específicos con EventBridge
- **Procesamiento de streams**: Procesa datos en tiempo real de Kinesis o DynamoDB Streams

## Tu primera función Lambda

Creemos una función simple que responde a solicitudes HTTP:

```javascript
exports.handler = async (event) => {
    const name = event.queryStringParameters?.name || 'Mundo';
    
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: `¡Hola ${name} desde Lambda!`,
            timestamp: new Date().toISOString()
        }),
    };
    
    return response;
};
```

## Desplegando con SAM

AWS SAM (Serverless Application Model) simplifica el despliegue:

```yaml
# template.yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31

Resources:
  HelloWorldFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: index.handler
      Runtime: nodejs18.x
      Events:
        HelloWorld:
          Type: Api
          Properties:
            Path: /hello
            Method: get
```

Despliega con:
```bash
sam build
sam deploy --guided
```

## Mejores prácticas

1. **Mantén las funciones pequeñas**: Una función, una responsabilidad
2. **Maneja los cold starts**: Usa provisioned concurrency para aplicaciones críticas
3. **Gestiona las dependencias**: Mantén el tamaño del deployment pequeño
4. **Usa variables de entorno**: Para configuración y secretos
5. **Implementa logging**: CloudWatch Logs es tu amigo

## Limitaciones a considerar

- **Tiempo de ejecución**: Máximo 15 minutos
- **Memoria**: Hasta 10GB
- **Tamaño del payload**: 6MB para requests síncronas
- **Cold starts**: Pueden añadir latencia inicial

## Ejemplo real: Thumbnail Generator

```javascript
const AWS = require('aws-sdk');
const sharp = require('sharp');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    const bucket = event.Records[0].s3.bucket.name;
    const key = event.Records[0].s3.object.key;
    
    try {
        // Obtener imagen original
        const image = await s3.getObject({ 
            Bucket: bucket, 
            Key: key 
        }).promise();
        
        // Crear thumbnail
        const thumbnail = await sharp(image.Body)
            .resize(200, 200)
            .toBuffer();
        
        // Guardar thumbnail
        await s3.putObject({
            Bucket: bucket,
            Key: `thumbnails/${key}`,
            Body: thumbnail,
            ContentType: 'image/jpeg'
        }).promise();
        
        return { 
            statusCode: 200, 
            body: 'Thumbnail creado exitosamente' 
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
};
```

## Conclusión

AWS Lambda es una herramienta poderosa para construir aplicaciones escalables sin preocuparte por la infraestructura. Empieza con casos de uso simples y gradualmente explora integraciones más complejas.

En el próximo artículo, exploraremos cómo construir una API completa usando Lambda, API Gateway y DynamoDB.

¿Ya has usado Lambda? ¡Comparte tu experiencia en los comentarios!