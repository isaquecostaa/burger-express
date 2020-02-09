import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import commonStyles from '~/assets/styles/commonStyles'
import { InputContainer, InputText } from './styledComponents';

function Input({ style, icon, ...rest }, ref) {
    return (
        <InputContainer style={style}>
            {icon && <Icon name={icon} size={20} color={commonStyles.colors.darkBlue} />}
            <InputText ref={ref} {...rest} />
        </InputContainer>
    );
}

Input.propTypes = {
    styles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

Input.defaultProps = {
    styte: {},
}

export default forwardRef(Input);