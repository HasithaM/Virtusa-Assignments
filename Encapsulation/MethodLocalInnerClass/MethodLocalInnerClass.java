class MethodLocalInnerClass {
	
	void outerMethod() {
        System.out.println("Inside OuterMethod"); 
        
        class Inner {
            void innerMethod() {
                System.out.println("Inside InnerMethod"); 
            }
        }
        
        Inner inner = new Inner();
        inner.innerMethod();
    }
	
	public static void main(String[] args) {
		MethodLocalInnerClass methodLocalInnerClass = new MethodLocalInnerClass();
        	methodLocalInnerClass.outerMethod();
	}
}
