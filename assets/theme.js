import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#fff',
          fontSize: '14px',
          lineHeight: '16px',
        }
      }
    },
    MuiButton: {
      root: {
        padding: '12px 16px',
        textTransform: 'none',
      },
      contained: {
        backgroundColor: "#707070",
        color: '#fff',

        '&:hover': {
          backgroundColor: "#505050",
        },
      },    
      outlined: {
        padding: '7px 15px',
        border: '2px solid #CF2F2F',
        color: '#000000',
        fontWeight: 'normal',
      }, 
    },
    MuiOutlinedInput: {
      input: {
        padding: '8px 14px',
      },
      root: {
        borderRadius: '5px',
      },
      notchedOutline: {
        borderColor: '#000000',
      },
    },
    MuiFilledInput: {
      root: {
        borderRadius: '4px',
      },
      input: {
        padding: '15px 12px 14px',
      },
    },
    MuiBreadcrumbs: {
      li: {
        fontSize: '14px',
      },
      separator: {
        marginLeft: '0',
        marginRight: '0',
      },  
    },
    MuiTableCell: {
      head: {
        color: '#9E9E9E',
        textTransform: 'uppercase',
        fontSize: '12px',
      },
      body: {
        color: '#171717',
        fontSize: '16px',
      },
    },
    MuiList: {
      root: {
        maxHeight: '550px',
        overflow: 'auto',
      },
    },
    MuiListItem: {
      root: {
        paddingTop: '2px',
        paddingBottom: '2px',
      },
    },
    MuiListItemIcon: {
      root: {
        justifyContent: 'flex-end',
      },
    },
    MuiStepLabel: {
      label: {
        fontWeight: 'normal',
        color: '#9E9E9E',
        '&$active': {
          fontWeight: 'normal',
          color: '#171717',
        },
        '&$completed': {
          fontWeight: 'normal',
          color: '#171717',
        },
      },
    },
    MuiTreeItem: {
      root: {
        borderTop: '1px solid #e8e8e8',
        lineHeight: '48px',
        '&:focus > .MuiTreeItem-content .MuiTreeItem-label': {
          backgroundColor: 'transparent',
        },
      },
      label: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#707070',
        lineHeight: 'inherit',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      iconContainer: {
        color: '#707070',
        width: 'auto',
      },
      group: {
        marginLeft: 0,
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: '#171717',
      },
    },
    MuiExpansionPanel: {
      root: {
        boxShadow: 'none',
        '&:before': {
          display: 'none',
        },
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        justifyContent: 'flex-start',
        padding: '0',
        maxWidth: '330px',
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: '8px 0 16px',
      },
    },
  },
  palette: {
    primary: {
      main: '#C10000',
    },
  },
});

export default theme;