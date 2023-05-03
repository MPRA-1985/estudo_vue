<template>
    <div>
      <h1>{{ tipo }} - {{ modalidade }}</h1>
      <!-- conteúdo do curso aqui -->
    </div>
  </template>
  
  <script>
  export default {
    props: ['tipo', 'modalidade']
  };
  </script>