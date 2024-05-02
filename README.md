# CopyGuard
 CopyGuard: Um script JavaScript para proteger conteúdo online. Este repositório contém o código-fonte que gera automaticamente um link para a sua página sempre que alguém copia algo do seu site. Mantenha o controle sobre o seu conteúdo e promova a sua página de forma inteligente com CopyGuard.

# Como usar no site ou blogue
Coloque o código a seguir entre as tags ```<head>``` e  ```</head>```:
```
<!-- Script citar fonte do blogger por Elizeu Barbosa Abreu -->
<script type='text/javascript'>
document.addEventListener(&#39;copy&#39;, function(e) {
    var selectedText = window.getSelection().toString();
    var pageUrl = window.location.href;
    var citation = &quot;\n\nFonte: &quot; + pageUrl;
    var copiedTextWithCitation = selectedText + citation;

    e.clipboardData.setData(&#39;text/plain&#39;, copiedTextWithCitation);
    e.preventDefault();
}); 
</script>
<!-- Fim Script citar fonte -->
```
Se este conteúdo for útil não esqueça de compartilhar o conteúdo e me seguir aqui no GitHub.