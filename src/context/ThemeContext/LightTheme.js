import { createTheme } from '@rneui/themed';

export const lightTheme = createTheme({
    components:{
        Text:(props,theme)=>({
            style:{
                color: '#121212',
                marginHorizontal: 10

            }
        }),
        Button:(props,theme)=>({
            buttonStyle:{
                backgroundColor: '#121212',
                marginHorizontal: 10
            },
            titleStyle:{
                color:'#f5f5f5'
            }
        })
    },
    Default:{
            background: "#fff",
            backgroundSecondary: '#E3E3E3',
            border: '#000'
    },
    Text:{
        style:{
            color: '#000'
        }
    },
    Icon:{
        iconStyle:{
            color: '#000'
        }
    },
    Input:{
        style:{
            color: '#000'
        }
    },
    Button:{
        buttonStyle:{
            backgroundColor: 'red'
        }
    }
}); 