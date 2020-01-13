class InnerClass {
    
    class InsideInner {
        void innerPrint() {
            System.out.println("In the Inner Class Method"); 
        }
    }
    
    void outerPrint() {
        System.out.println("In the Outer Class Method"); 
    }
	
	public static void main(String[] args) {
		InnerClass innerClass = new InnerClass();
		innerClass.outerPrint();
		
		InnerClass.InsideInner insideInner = innerClass.new InsideInner();
		insideInner.innerPrint();
	}
}
