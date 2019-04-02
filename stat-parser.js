const path = require('path')
const fs = require('fs')
const xml = require('xml2js').parseString;

module.exports = (demos_path) => {
    return new Promise((resolve, reject) => {
        const dirpath = demos_path;
        const processed_files = fs.readFileSync('processed_files').toString().split('\n');
        const files = fs.readdirSync(dirpath);
        const new_file = files.filter(el => /\.txt$/.test(el)).find(el => !processed_files.includes(el));
        if (!new_file) {
            return;
        }
        const stats = fs.readFileSync(path.join(dirpath, new_file));

        xml(stats.toString(), (err, res) => {
            if (err) {
                console.log('Nope: ', err)
                return;
            }

            try {
                const map = res.match.$.map;
                console.log(map);
                const players = res.match.players[0].player.map(player => ({
                    name: player.$.name,
                    frags: parseInt(player.$.frags, 10)
                })).sort((a, b) => a.frags < b.frags);

                fs.appendFileSync('processed_files', new_file);

                resolve({
                    players,
                    map
                });

            } catch(e) {
                console.log('Nope: ', err)
            }
        });
    });
}
