---
title: 'Introducción a React Hooks'
date: '2023-03-15'
description: 'Aprende los conceptos básicos de React Hooks y cómo pueden simplificar tu código.'
published: true
tags: ['react', 'javascript', 'frontend']
---

Los React Hooks revolucionaron la forma en que escribimos componentes en React. En este artículo, exploraremos los hooks más importantes y cómo utilizarlos efectivamente.

## ¿Qué son los React Hooks?

Los Hooks son funciones que te permiten "engancharte" a las características de React desde componentes funcionales. Antes de los hooks, necesitabas componentes de clase para manejar estado y efectos secundarios.

## Los Hooks más importantes

### useState

El hook más básico y utilizado. Permite agregar estado a componentes funcionales:

```javascript
const [count, setCount] = useState(0);

return (
  <button onClick={() => setCount(count + 1)}>
    Clicks: {count}
  </button>
);
```

### useEffect

Maneja efectos secundarios como llamadas a APIs, suscripciones, o manipulación del DOM:

```javascript
useEffect(() => {
  document.title = `Has hecho click ${count} veces`;
  
  return () => {
    // Cleanup
  };
}, [count]);
```

### useContext

Permite consumir contexto sin necesidad de Consumer components:

```javascript
const theme = useContext(ThemeContext);
```

## Reglas de los Hooks

1. **Solo llama Hooks en el nivel superior** - No los llames dentro de loops, condiciones o funciones anidadas
2. **Solo llama Hooks desde funciones de React** - Desde componentes o custom hooks

## Custom Hooks

Puedes crear tus propios hooks para reutilizar lógica entre componentes:

```javascript
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}
```

## Conclusión

Los React Hooks simplifican significativamente el desarrollo con React, permitiendo escribir componentes más limpios y reutilizables. En próximos artículos, profundizaremos en hooks más avanzados como useReducer, useMemo y useCallback.

¡Experimenta con estos ejemplos y comienza a usar hooks en tus proyectos!