export default function EventContent() {
	return (
		<Show
			when={hasData}
			fallback={<EventCreateFallback onCreate={handleOpenCreateDialog} />}
		>
			<EventGrid events={data} />
		</Show>
	);
}
