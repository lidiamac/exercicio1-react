import Produtos from './produtos'

export default props => {
    function obterLista() {
        return Produtos.map(p => {
            return (
                <h3 key={p.id}> {p.id}) {p.nome} tem preço R$ {p.preco}
                </h3>
            )
        })
    }

    return (
        <>
            <h2>Lista de Produtos</h2>
            {obterLista()}
        </>
    )
        
}