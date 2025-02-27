function downloadFile() {
    // Cria um link temporário
    const link = document.createElement("a");
    link.href = "curriculum.pdf";

    // Adiciona o atributo download com nome opcional
    link.download = "Gabriel_Vitor Ziedin_currículo.pdf";

    // Aciona o clique no link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
