import styled from 'styled-components';
import PropTypes from 'prop-types';

const getButtonSize = (style,parameter)=>{
    const buttonSize = {
        large: {
            width: "81px",
            height: "48px",
        },
        medium: {
            width: "76px",
            height: "48px",
        },
        small: {
            width: "64px",
            height: "40px",
        },
    }
    return buttonSize[style]?.[parameter] ?? buttonSize.large[parameter]
}

const BaseButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 4px; 
    width: ${({size})=> getButtonSize(size,"width")};
    height:${({size})=> getButtonSize(size,"height")};
    `

const PrimaryButton  = styled(BaseButton)`
     background: #605DEC;   
     color: #FAFAFA;
     :hover {
     background: #1513A0;
     }
     :disabled {
     background: rgba(203, 212, 230, 0.3);
     color: #7C8DB0;
     }
    `
const SecondaryButton = styled(BaseButton)`
    border: 1px solid #605DEC;
    border-color: #605DEC;
    color: #605DEC;
    background: #fff;
    :hover {
    background-color: #E9E8FC;
    }
    :disabled {
    border: 1px solid #605DEC;
    background: #E9E8FC;
    }
    `

const Button = ({children, onClick, color, disabled, size, icon})=>{

    const buttonProps = {
        onClick, children, color,disabled,size, icon
    }

    switch (color) {
        case "primary": {
            return (
                <PrimaryButton {...buttonProps}>
                    {children}
                </PrimaryButton>
            )
        }
        case "secondary": {
            return (
                <SecondaryButton {...buttonProps}>{children}</SecondaryButton>
            )
        }
    }

}

export default Button

Button.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["primary", "secondary"]),
    disabled: PropTypes.bool,
    children: PropTypes.string,
    size: PropTypes.oneOf(['large','medium','small']),
}

Button.defaultProps = {
    color: "primary",
    size: "large",
    disabled: false,
}
