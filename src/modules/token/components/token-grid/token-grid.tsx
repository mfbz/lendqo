import { List } from 'antd';
import React from 'react';
import { Rent } from '../../../../wallet';
import { NFT } from '../../../../wallet/interfaces/nft';
import { TokenCard } from '../token-card/token-card';

export const TokenGrid = React.memo(function TokenGrid({
	rents,
	onLoadNFT,
	onClickRent,
	style,
}: {
	rents: Rent[];
	onLoadNFT: (nftScriptHash: string, nftTokenId: string) => Promise<NFT | null>;
	onClickRent: (rent: Rent) => void;
	style?: React.CSSProperties;
}) {
	return (
		<div style={style}>
			<List
				grid={{
					gutter: 24,
					column: 3,
					xs: 1,
					sm: 1,
					md: 2,
					lg: 3,
					xl: 3,
					xxl: 3,
				}}
				dataSource={rents}
				rowKey={(item) => item.tokenId}
				renderItem={(item) => {
					return (
						<List.Item style={{ marginBottom: 24 }} onClick={() => onClickRent(item)}>
							<TokenCard rent={item} onLoadNFT={onLoadNFT} />
						</List.Item>
					);
				}}
			/>

			<style jsx>{``}</style>
		</div>
	);
});
