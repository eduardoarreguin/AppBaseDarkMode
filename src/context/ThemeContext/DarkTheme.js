import { createTheme  } from '@rneui/themed';

export const darkTheme = createTheme({
    components:{
        Text:(props,theme)=>({
            style:{
                color: '#f5f5f5',
                marginHorizontal: 10

            }
        }),
        Button:(props,theme)=>({
            buttonStyle:{
                backgroundColor: '#f5f5f5',
                marginHorizontal: 10
            },
            titleStyle:{
                color:'#121212'
            }
        }),


        
    },
    Default:{
            background: "#121212",
            backgroundSecondary: '#1F1F1F',
            border: '#3B3B3B'
    },
    Text:{
        style:{
            color: '#fff'
        }
    },
    Icon:{
        iconStyle:{
            color: '#fff'
        }
    },
    Input:{
        style:{
            color: '#fff'
        }
    },
    Button:{
        buttonStyle:{
            background: 'red'
            //backgroundColor: '#2185D0'
        }
    }
}); 