
declare namespace cc {

	declare type ClassType<T> = { prototype: T };

	declare enum CountComponentType {
		CHILDREN,
		PARENTS,
		BOTH
	}

	declare interface Component extends Object {

		/**
		 * @description
		 * | Executing every time this component change
		 *
		 */
		protected onChange(): void;

		/**
		 * @description
		 * | 
		 *
		 */
		public getNonNullComponent<T extends Component>(type: ClassType<T> | string): T

		public getPossibleComponent<T extends Component>(...types: ClassType<T>[] | string[]): T
		
		public getComponentInParents<T extends Component>(type: ClassType<T> | string): T;

		public getRootNode(): Node;

		public findComponent<T extends Component>(type: ClassType<T> | string): T
		public countComponent<T extends Component>(type: ClassType<T> | string, count_type: CountComponentType): number
	}
}
