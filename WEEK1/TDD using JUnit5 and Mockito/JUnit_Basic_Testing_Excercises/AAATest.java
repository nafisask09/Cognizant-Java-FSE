import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class AAATest {

    @Before
    public void setUp() {
        System.out.println("Setup before test");
    }

    @After
    public void tearDown() {
        System.out.println("Cleanup after test");
    }

    @Test
    public void testAddition() {

        // Arrange
        int a = 5;
        int b = 3;

        // Act
        int result = a + b;

        // Assert
        assertEquals(8, result);
    }
}