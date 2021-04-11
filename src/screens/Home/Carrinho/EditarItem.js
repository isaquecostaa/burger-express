import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import api from '~/services/api';

import styles from './styles';
import commonStyles from '~/assets/styles/commonStyles';

import {AppWrap, AppBody} from '~/components/styledComponents';
import AppHeader from '~/components/AppHeader';
import ItemList from '~/components/ItemList';

import Input from '~/components/Input';
import Button from '~/components/Button';

import TotalItem from './components/TotalItem';
import ItemPedido from '../components/ItemPedido';
import ItemProduto from '~/screens/Cardapio/components/ItemProduto';

export default function EditarProduto({route, navigation}) {
  const [adicionais, setAdicionais] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadItems() {
    try {
      const response = await api.get(
        `/produtos/?id_categoria=${route.params.produto.id_categoria}`,
      );
      const {data} = response.data;

      setAdicionais(data);
    } catch (error) {
      console.log('Error on Cardapio/Produtos.js ==> ', error);
      console.log(
        'URL Request ==> ',
        `${api.defaults.baseURL}/produtos/?id_categoria=${
          route.params.produto.id_categoria
        }`,
      );
    } finally {
      setLoading(false);
    }
  }

  function updateItemQtd(item, value) {
    setLoading(!loading);
    let items = adicionais;
    let index = items.indexOf(item);

    items[index].qtd = value >= 0 ? value : 0;

    setAdicionais(items);
    setLoading(!loading);
  }

  return (
    <AppWrap>
      <AppHeader />
      <AppBody>
        <Image
          resizeMode="cover"
          style={styles.itemFoto}
          source={{
            uri: commonStyles.baseDIR + route.params.produto.foto,
          }}
        />

        <ItemList
          ListHeaderComponent={
            <ItemProduto
              showPhoto
              {...route.params.produto}
              categoria={route.params.categoria}
            />
          }
          data={adicionais}
          extraData={loading}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemPedido
              {...item}
              categoria={route.params.categoria}
              plus={() => updateItemQtd(item, item.qtd + 1)}
              minus={() => updateItemQtd(item, item.qtd - 1)}
            />
          )}
          onRefresh={loadItems}
          refreshing={loading}
          emptyIcon={!loading && route.params.categoria.icon}
          emptyMessage={!loading && 'Nenhum adicional disponível...'}
          ListFooterComponent={
            <View>
              <Input
                icon="chat-alert"
                style={{marginTop: 10}}
                placeholder="Ex: Tirar salada, maionese a parte, etc."
              />

              <TotalItem
                produto={route.params.produto}
                adicionais={adicionais}
              />

              <Button onSubmitEditing={null} color={commonStyles.colors.red}>
                ADICIONAR AO CARRINHO
              </Button>
            </View>
          }
        />
      </AppBody>
    </AppWrap>
  );
}

EditarProduto.navigationOptions = {
  title: 'Editar Produto',
  headerShown: false,
};
