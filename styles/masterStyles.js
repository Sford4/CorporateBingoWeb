export const COLORS = {
    // primary: '#ABCDEF',
    primary: '#4A94DE',
    secondary: '#FEDCBA',
    green: '#5ac776',
}

export const MASTER = {
    wideRoundBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        width: '90%',
        borderRadius: 50,
        height: 35,
        marginTop: 20,
        fontSize: 16,
        outline: 'none',
        cursor: 'pointer',
    },
    wideRoundBtnText: {
        color: 'white',
    },
    wideRoundInput: {
        marginVertical: 15,
		borderColor: COLORS.primary,
        fontSize: 15,
        borderWidth: 1,
        width: 'calc(90% - 20px)',
        borderRadius: 50,
        height: 35,
        padding: '0px 0px 0 20px',
        outline: 'none',
        marginTop: 20,
    },
    wideRoundTextArea: {
        marginVertical: 15,
		borderColor: COLORS.primary,
        fontSize: 15,
        borderWidth: 1,
        width: '90%',
        borderRadius: 20,
        height: 100,
        paddingHorizontal: 20,
        outline: 'none',
        padding: 8,
    },
    emptySquare: {
        width: 60,
        height: 60,
    },
    completeSquare: {
        width: 60,
        height: 60,
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'black',
    },
    incompleteSquare: {
        width: 60,
        height: 60,
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: 'black',
    },
    rewardSquare: {
        width: 60,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    smallRewardIcon: {
        width: 40, 
        height: 40
    },
    freeSquare: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    freeSquareIcon: {
        height: 45,
        width: 45
    },
    card: {
        height: 100,
        width: '90%',
        borderRadius: 50,
        marginTop: 20,
        outline: 'none',
        cursor: 'pointer',
        borderColor: COLORS.secondary,
        borderWidth: 3,
        maxWidth: 300,
        boxShadow: '1px 3px #999999',
    },
    cardInteriorView: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        borderWidth: 3,
        borderColor: COLORS.secondary,
        height: '100%',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 12
    },
    pageTitle: {
        fontSize: 32,
        color: COLORS.primary,

    }
}

