import {ApiResponse} from '@modules/shared/domain/model';
import {
  QueryKey,
  useQuery as useQueryNative,
  UseQueryOptions,
} from '@tanstack/react-query';
// ---------------------------------------------------------------------
interface Props {
  key: QueryKey;
  service: () => Promise<ApiResponse>;
  showMessage?: boolean;
  options?: UseQueryOptions | any;
  onError?: (err: any) => void;
  onSuccess?: (data: ApiResponse) => void;
}
const useQuery = (props: Props) => {
  const query = useQueryNative<ApiResponse>(
    props.key,
    props.service,
    props.options,
  );
  return query;
};

export default useQuery;
