// middleware pattern(chain of responsibility)

const passo1 = (ctx, next) => {
    ctx.valor = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor = 'mid2'
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...midllewares) => {
    const execPasso = indice => {
        midllewares && indice < midllewares.length &&
           midllewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {
    
}

exec(ctx, passo1, passo2, passo3)

console.log(ctx)