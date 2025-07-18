---
title: "Test de Componentes en Markdown"
date: "2025-01-18"
description: "Probando el uso de componentes de Svelte dentro de archivos markdown"
tags: ["svelte", "test"]
---

<script>
  import ClickCounter from '$lib/components/ClickCounter.svelte';
</script>

# Componentes de Svelte en Markdown

Este es un ejemplo de cómo usar componentes de Svelte dentro de archivos markdown usando MDsveX.

## Ejemplo de Contador

Aquí hay un contador interactivo:

<ClickCounter />

## Código de Ejemplo

Aquí hay un ejemplo de código JavaScript:

```javascript
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

const mensaje = saludar('Mundo');
console.log(mensaje); // Output: Hola, Mundo!
```

## Código Python

```python
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

# Ejemplo de uso
print(factorial(5))  # Output: 120
```

## Código React

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has hecho click {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
```

## Conclusión

MDsveX permite mezclar markdown con componentes de Svelte de manera fluida. Puedes usar otro contador aquí:

<ClickCounter />

Y el contenido markdown continúa normalmente.