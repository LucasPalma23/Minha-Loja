import imgPerfilIcon from '../assets/images/perfil-icon.svg'
import imgCartIcon from '../assets/images/cart-icon.svg'
import imgLogoIcon from '../assets/images/logo-icon.svg'
import imgLupaIcon from '../assets/images/lupa-icon.svg'
import imgBanner from '../assets/images/banner.svg'

import '../styles/Home.scss'

export function Home() {
  return (
    <>
      <header>
        <div className='container'>
          <img className='img-logo' src={imgLogoIcon} alt="Logo da loja" />
          <div className='text-find'>
            <img className='img-lupa' src={imgLupaIcon} alt="Imagem de lupa" />
              <input
              type="text"
              className='txtFind'
              placeholder='Encontre um produto' />
            </div>
            <div className='nav-section'>
              <section>
                <img src={imgPerfilIcon} alt="Ícone de perfil" />
                <label>Entrar</label>
              </section>
              <img className='img-cart' src={imgCartIcon} alt="Ícone de carrinho" />
            </div>
        </div>
          <nav>
            <ul>
              <li>Novidade</li>
              <li>Masculino</li>
              <li>Feminino</li>
              <li>Coleções</li>
              <li><span>Sales</span></li>
            </ul>
          </nav>
      </header>
    </>
  )
}