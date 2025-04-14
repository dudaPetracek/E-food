import { Menu } from '../../models/Menu'
import Product from '../Product'
import * as S from './styles'

type Props = {
  menus: Menu[]
  title: string
}

const ProductsList = ({ menus, title }: Props) => (
  <S.Container>
    {title && <S.Title>{title}</S.Title>}
    <S.List>
      {menus.map((menu) => (
        <li key={menu.id}>
          <Product
            title={menu.title}
            category={menu.category}
            description={menu.description}
            image={menu.image}
            rating={menu.rating}
            isHighlight={menu.isHighlight}
            tipo={menu.tipo}
          />
        </li>
      ))}
    </S.List>
  </S.Container>
)

export default ProductsList
