export const bubbleSort = (items) => {
    let i, j
    let n = items.length
    const animations = []
    for (i = 0; i < n - 1; i++) {
        let currentIndex = i
        for (j = 0; j < n - i - 1; j++) {
            if (items[j] > items[j + 1]) {
                let animation = {}
                currentIndex = j
                animation.heightOne = items[j]
                animation.heightTwo = items[j + 1]
                animation.indexOne = j
                animation.indexTwo = j + 1
                animation.finalMove = false

                animations.push(animation)

                let temp = items[j]
                items[j] = items[j + 1]
                items[j + 1] = temp
            }
        }

        let animation = {}
        animation.finalMove = true
        animation.indexOne = currentIndex
        animation.indexTwo = currentIndex + 1
        animations.push(animation)
    }
    console.log(animations)
    return { items, animations }
}
