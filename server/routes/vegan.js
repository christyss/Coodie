const express = require('express');
const router = express.Router();
const fs = require('fs')

const veganRecipe = './data/vegan.json';

const readVideosFile = () => {
    const FileContent = fs.readFileSync(veganRecipe);
    const parsedFileContent = JSON.parse(FileContent)
    return parsedFileContent;
}

const writeVideosFile = (info) => {
    const infoStringify = JSON.stringify(info);
    fs.writeFileSync(veganRecipe, infoStringify)
}



router.get('/', (req, res) => {
    try {
        const vegan = readVideosFile();
        return res.status(200).json(vegan);
    } catch (error) {
        return res.status(500).json({ error: 'The file cannot be read.' })
    }
});



module.exports = router;
