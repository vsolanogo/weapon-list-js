let n = 0;
export const idGenerator = {
    gen: function () {
        return `id${n++}`;
    },
};
