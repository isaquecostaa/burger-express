import React, {useEffect, useState} from 'react';
import {useAuth} from '~/contexts/auth';
import api from '~/services/api';

import {AppWrap, AppBody} from '~/components/styledComponents';
import AppHeader from '~/components/AppHeader';
import ItemList from '~/components/ItemList';

import ItemCategoria from './components/ItemCategoria';

function Categorias({route, navigation}) {
  const {loading, setLoading} = useAuth();
  const [categorias, setCategorias] = useState();

  useEffect(() => loadItems, []);

  async function loadItems() {
    try {
      const response = await api.get('/produtos/?categorias=1');
      const {data} = response.data;

      setCategorias(data);
    } catch (error) {
      console.log('Error on Cardapio/Categorias.js ==> ', error);
      console.log('URL Request ==> ', `${api.defaults.baseURL}/categorias`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppWrap>
      <AppHeader title={'Cardápio'} />
      <AppBody>
        <ItemList
          data={categorias}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemCategoria
              onPress={() => {
                navigation.navigate('Produtos', {categoria: item});
              }}
              {...item}
            />
          )}
          onRefresh={loadItems}
        />
      </AppBody>
    </AppWrap>
  );
}

Categorias.navigationOptions = ({route, navigation}) => ({
  title: 'Cardápio',
  headerShown: false,
});

export default Categorias;
