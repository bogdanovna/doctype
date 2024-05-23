import { notifications } from '@mantine/notifications';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { tokensService } from '~/features/auth/model/services/tokens.service';

import { api } from '../../api/main';
import { actions } from '../model';

export const defineSession = createAsyncThunk(
    'auth/define-session',
    async (_, { dispatch }) => {
        const tokensDefined = tokensService.getAccess() && tokensService.getRefresh();

        if (tokensDefined) {
            const query = await api.session();

            if (query?.data?.user) {
                dispatch(actions.registerSession(query.data.user));
            } else {
                showCloudStorageNotification();
            }
        } else {
            showCloudStorageNotification();
        }
    }
);

function showCloudStorageNotification() {
    setTimeout(() => {
        notifications.show({
            title: 'Could Storage',
            message: 'Sign In to keep your progress safe!',
            autoClose: 4500,
        });
    }, 3000);
}
