// Sitas config failas skirtas daryt papildomu triuku su css kuri isgeneruoja webpackas

module.exports = {
    plugins: [
        require('cssnano'), // Sitas package istrina white space galutiniam css faile -> sumazina jo svori
        require('autoprefixer'), // Sitas pasirupina pridet specialius flagus atributam kad veiktu ant senesniu narsykliu. Prie to paties yra .browserlistrc failas kuriame nurodom kokias narsykles palaikom su savo projektu, ir pagal tai orientuosis kokius flagus pridet
    ]
};
