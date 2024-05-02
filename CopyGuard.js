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