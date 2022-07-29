import { AxiosRequestConfig } from "axios";
import Loading from "client/common/components/loading/Loading";
import Tailwind from "client/common/tailwind/Tailwind";
import useFetch from "client/hooks/useFetch";
import SearchBar, { SearchBarProps } from "client/views/components/searchbar/SearchBar";
import { FunctionComponent } from "react";
import ExplorePageBody, { ExplorePageBodyProps } from "./body/ExplorePageBody";

export interface ExplorePageBlueprintProps {
    getPage: () => AxiosRequestConfig<ExplorePageProps>;
}
export interface ExplorePageProps {
    title: string;
    searchbar: SearchBarProps;
    body: ExplorePageBodyProps;
}

const ExplorePage: FunctionComponent<ExplorePageBlueprintProps> = (props: ExplorePageBlueprintProps) => {
    const page = useFetch<ExplorePageProps>(props.getPage());
    const className = Tailwind.builder()
        .addIf(`h-screen flex justify-center items-center`, page?.loading)
        .add("space-y-8")
        .build();
    document.title = page?.data?.title ?? "Loading...";
    return (
        <div className={className}>
            <Loading loading={page?.loading}>
                <SearchBar {...page?.data?.searchbar} />
                <ExplorePageBody {...page?.data?.body} />
            </Loading>
        </div>
    );
}

export default ExplorePage;