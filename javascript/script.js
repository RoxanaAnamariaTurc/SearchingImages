function filterImg(searchText)
{
    const images = document.querySelectorAll('#images img');
    for (let i = 0; i < images.length; i++)
    {
        const img = images[i];
        if (img.alt.toLowerCase().indexOf(searchText.toLowerCase()) >= 0)
        {
            img.style.display = '';
        } else
        {
            img.style.display = 'none';
        }
    }

}

const searchText = document.getElementById("text-field");
searchText.addEventListener("input", function ()
{
    const searchTerm = this.value;
    filterImg(searchTerm);
})