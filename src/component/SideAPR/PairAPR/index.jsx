
import React from 'react'
import { Container, InputNumberStyled, Title, Wrapper1, Wrapper2, Wrapper3, Wrapper4 } from './style'
import { Button } from 'antd';

function onChange(value) {
    console.log('changed', value);
}

export const PairAPR = () => {
    return (
        <Container>
            <Title>Pair-side APR</Title>
            <Wrapper1>
                <Wrapper3>예치된 총 수량</Wrapper3>
                <Wrapper3>환산 가치 (예치된 총 수량 *KLAY 최근 AKD 결제액)</Wrapper3>
                <Wrapper3>APR (토큰 가격*1일 분배 수량*365/TVL*100%)</Wrapper3>
            </Wrapper1>
            <Wrapper2>
                <InputNumberStyled
                    style={{
                        width: 200,
                    }}
                    defaultValue="123,456,000"
                    min="0"
                    max="10"
                    step="0.00000000000001"
                    onChange={onChange}
                    stringMode
                />
                <InputNumberStyled
                    style={{
                        width: 200,
                    }}
                    defaultValue="000,000,000"
                    min="0"
                    max="10"
                    step="0.00000000000001"
                    onChange={onChange}
                    stringMode
                />
                <InputNumberStyled
                    style={{
                        width: 200,
                    }}
                    defaultValue="1 week "
                    min="0"
                    max="10"
                    step="0.00000000000001"
                    onChange={onChange}
                    stringMode
                />
            </Wrapper2>
            <Wrapper4>
                <Button type="primary">저장</Button>
            </Wrapper4>
        </Container>
    )
}
