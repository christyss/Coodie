const express = require('express');
const router = express.Router();
const fs = require('fs')

const westernRecipe = './data/western.json'

const readVideosFile = () => {
    const FileContent = fs.readFileSync(westernRecipe);
    const parsedFileContent = JSON.parse(FileContent)
    return parsedFileContent;
}


router.get('/', (req, res) => {
    try {
        const western = readVideosFile();
        return res.status(200).json(western);
    } catch (error) {
        return res.status(500).json({ error: 'The file cannot be read.' })
    }
});



module.exports = router;
