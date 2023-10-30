// "use client";
// import { remToPx } from "@/lib/remToPx";
// import { SectionProviderProps, SectionProviderState, Section } from "@/types";
// import {
// 	createContext,
// 	useContext,
// 	useEffect,
// 	useLayoutEffect,
// 	useState,
// } from "react";
// import { useStore, create } from "zustand";

// export const createSectionStore = (sections: Section[]) => {
// 	return create<SectionProviderState>((set) => ({
// 		sections,
// 		visibleSections: [],
// 		setVisibleSections: (visibleSections) =>
// 			set((state) =>
// 				state.visibleSections.join() === visibleSections.join()
// 					? {}
// 					: { visibleSections }
// 			),
// 		registerHeading: ({ id, ref, offsetRem }) =>
// 			set((state) => {
// 				return {
// 					sections: state.sections.map((section) => {
// 						if (section.id === id) {
// 							return {
// 								...section,
// 								headingRef: ref,
// 								offsetRem,
// 							};
// 						}
// 						return section;
// 					}),
// 				};
// 			}),
// 	}));
// };

// const useVisibleSections = (sectionStore: any) => {
// 	let setVisibleSections = useStore(
// 		sectionStore,
// 		(state: any) => state.setVisibleSections
// 	);

// 	let sections = useStore(sectionStore, (state: any) => state.sections);

// 	useEffect(() => {
// 		function checkVisibleSections() {
// 			let { innerHeight, scrollY } = window;
// 			let newVisibleSections = [];

// 			for (
// 				let sectionIndex = 0;
// 				sectionIndex < sections.length;
// 				sectionIndex++
// 			) {
// 				let { id, headingRef, offsetRem } = sections[sectionIndex];
// 				let offset = remToPx(offsetRem);
// 				let top =
// 					headingRef?.current?.getBoundingClientRect().top + scrollY;

// 				if (sectionIndex === 0 && top - offset > scrollY) {
// 					newVisibleSections.push("_top");
// 				}

// 				let nextSection = sections[sectionIndex + 1];
// 				let bottom =
// 					(nextSection?.headingRef?.current.getBoundingClientRect()
// 						.top ?? Infinity) +
// 					scrollY -
// 					remToPx(nextSection?.offsetRem ?? 0);

// 				if (
// 					(top > scrollY && top < scrollY + innerHeight) ||
// 					(bottom > scrollY && bottom < scrollY + innerHeight) ||
// 					(top <= scrollY && bottom >= scrollY + innerHeight)
// 				) {
// 					newVisibleSections.push(id);
// 				}
// 			}

// 			setVisibleSections(newVisibleSections);
// 		}

// 		let raf = window.requestAnimationFrame(() => checkVisibleSections());
// 		window.addEventListener("scroll", checkVisibleSections, {
// 			passive: true,
// 		});
// 		window.addEventListener("resize", checkVisibleSections);

// 		return () => {
// 			window.cancelAnimationFrame(raf);
// 			window.removeEventListener("scroll", checkVisibleSections);
// 			window.removeEventListener("resize", checkVisibleSections);
// 		};
// 	}, [setVisibleSections, sections]);
// };

// const SectionStoreContext = createContext([]);

// const useIsomorphicLayoutEffect =
// 	typeof window === "undefined" ? useEffect : useLayoutEffect;

// export function SectionProvider({ sections, children }: SectionProviderProps) {
// 	const [sectionStore, setSectionStore] = useState<any>(() =>
// 		createSectionStore(sections)
// 	);
// 	useVisibleSections(sectionStore);

// 	useIsomorphicLayoutEffect(() => {
// 		sectionStore.setState({ sections });
// 	}, [sectionStore, sections]);

// 	return (
// 		<SectionStoreContext.Provider value={sectionStore}>
// 			{children}
// 		</SectionStoreContext.Provider>
// 	);
// }

// export function useSectionStore(selector: (state: any) => any): any {
// 	let store = useContext<any>(SectionStoreContext);
// 	return useStore(store, selector);
// }
