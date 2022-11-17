import {
  useMutation as useMutationNative,
  UseMutationOptions,
} from '@tanstack/react-query';
import {ApiResponse} from '@modules/shared/domain/model';
import {ToastAndroid} from 'react-native';

interface Props {
  service: (data: any) => Promise<ApiResponse>;
  showMessage?: boolean;
  durationMessage?: 'LONG' | 'SHORT';
  options?: UseMutationOptions;
  onError?: (err: any) => void;
  onSuccess?: (data: ApiResponse) => void;
}
const useMutation = (props: Props) => {
  const {durationMessage} = props;
  const mutation = useMutationNative<ApiResponse>(props.service, {
    onError: (e: any) => {
      props.onError && props.onError(e);
      ToastAndroid.show(
        e.message || e,
        durationMessage === 'LONG' ? ToastAndroid.LONG : ToastAndroid.SHORT,
      );
    },
    onSuccess: data => {
      props.showMessage &&
        ToastAndroid.show(
          data.message || 'Mutation Success',
          durationMessage === 'LONG' ? ToastAndroid.LONG : ToastAndroid.SHORT,
        );
      props.onSuccess && props.onSuccess(data);
    },
  });
  return mutation;
};

export default useMutation;
