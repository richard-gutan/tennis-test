
exports.getGameResult = (score, player1Wins) => {
    if (this.hasScoreCorrectFormat(score)) {
        const [player1, player2] = score.split('-')

        let result
        if (player1Wins) {
            result = calculateScore(player1, player2)
            return result[0] === 'game' ? 'Game Player1' : result.join('-')
        }
        
        result = calculateScore(player2, player1)
        return result[0] === 'game' ? 'Game Player2' : result.reverse().join('-')
    } else {
        throw 'Invalid score format.'
    }
}

function calculateScore(winner, loser) {
    const scoreSequence = {
        '0': '15',
        '15': '30',
        '30': '40'
    }
    if (winner === '40' && loser === '40') {
        return ['A', '40']
    }
    if (loser === 'A') {
        return ['40', '40']
    }
    if (winner === 'A' || winner === '40') {
        return ['game']
    }
    return [scoreSequence[winner], loser]
}

exports.hasScoreCorrectFormat = score => {
    return /^((0|15|30|40)-(0|15|30|40))|(A-40|40-A)$/g.test(score)
}

