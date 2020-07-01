import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const HeaderWrapper = styled.div`
    flex: 0 0 auto;
    display: flex;
    justify-content: flex-end;
    height: 52px;
    align-items: center;
    border-bottom: 1px solid #333333;
    width: 100%;
`

const Button = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    height: 28px;
    border-radius: 4px;
    background-color: #1890ff;
    border-color: #1890ff;
    color: #fff;
    cursor: pointer;
    margin-right: 18px;
    padding: 4px 15px;
    user-select: none;
    white-space: nowrap;
    text-align: center;
    touch-action: manipulation;
`

const Header = ({callback, text}) => {
    return (
        <HeaderWrapper>
                <Link
                    to={{
                        pathname: text === 'Privacy Policy' ? '/privacy' : '/tos',
                        state: { modal: true }
                    }}
                    style={{textDecoration: 'none'}}
                >
                    <Button>
                        {text}
                    </Button>
                </Link>

            <Button onClick={() => callback()}>
                Send Message
            </Button>
        </HeaderWrapper>
    )
}

export default Header;