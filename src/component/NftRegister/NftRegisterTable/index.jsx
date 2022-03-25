import React from 'react'
import { Container, Tabble } from './style'

export const NftRegisterTAble = () => {
    return (
        <Container>
            <Container.Title>
                NFT 등록
            </Container.Title>
            <Container.Border />
            {/* select 1 */}
            <Tabble>
                <p>판메마켓</p>

                <select >
                    <option >Minting</option>
                    <option >One</option>
                    <option >Two</option>
                    <option >Three</option>
                </select>
            </Tabble>
            {/* 2 */}
            <Container.Border />
            <Tabble>
                <p>판매방식</p>
                <select >
                    <option >고정가</option>
                    <option >One</option>
                    <option >Two</option>
                    <option >Three</option>
                </select>
            </Tabble>
            {/* select 2 */}
            <Container.Border />
            <Tabble>
                <p>결제토큰</p>
                <select >
                    <option >AKD</option>
                    <option >One</option>
                    <option >Two</option>
                    <option >Three</option>
                </select>
            </Tabble>
            {/* select 3 */}
            <Container.Border />
            <Tabble>
                <p>가격</p>
                <input placeholder='0' ></input>
            </Tabble>
            {/* sectoion 4 */}
            <Container.Border />
            {/* section 5 */}
            <Tabble>
                <p>로열티</p>
                <input placeholder='35' ></input>
            </Tabble>
            < Container.Border />
            {/* section 6 */}
            <Tabble>
                <p>아이템 이름</p>
                <input placeholder='아이템 이름을 입력하세요.
' ></input>
            </Tabble>
            <Container.Border />
            {/* section 7 */}

            <Tabble left>
                <p>파일 업로드</p>
                <input placeholder='아이템을 업로드하세요.' ></input>
                <button className='file'>선택</button>
            </Tabble>
            <Container.Border />
            <button className='nftreg'>저장</button>

        </Container>
    )
}

export default NftRegisterTAble