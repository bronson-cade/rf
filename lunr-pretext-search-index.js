var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": " For my dogs, Dana and Milla.  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " This work is adapted from Rings with Inquiry . I am tremendously grateful for Michael Janssen and Melissa Lindsey for sharing their source material with me.  However, this textbook is not an inquiry based learning textbook and any mistakes are my own.  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This textbook aims to provide a rings first introduction to abstract algebra. At my institution, we teach ring and field theory before group theory. There are great inquiry based books available that follow this path; however, there are not many options for more traditional courses. This textbook is an attempt to provide such an option.  It is, moreover, written with the students at California State University San Bernardino in mind, particularly those that continue on to our graduate algebra course. These students need to have a good working knowledge of polynomial rings, the Noether Isomorphism Theorem, and quotient rings.  I always enjoy telling my students the parable of the blind people and the elephant . In these notes, I attempt to describe my part of the elephant. It is, however, only my part of the elephant. If you feel like something could be said differently or better please reach out.  "
},
{
  "id": "sec_inductionWellOrdering",
  "level": "1",
  "url": "sec_inductionWellOrdering.html",
  "type": "Section",
  "number": "1.1",
  "title": "Induction and the Well-Ordering Property",
  "body": " Induction and the Well-Ordering Property    In this section, we'll seek to answer the following questions:    What is the Well-Ordering Principle?  What is mathematical induction, and how can we use it to prove statements about ?     In this section we will assume the basic algebraic\/arithmetic properties of the integers such as closure under addition, subtraction, and multiplication, most of which we will formalize via axioms in subsequent sections. formalizes the familiar notion that nonempty subsets of the positive integers have a smallest element, which will be used repeatedly throughout the text. We then explore a closely related idea, mathematical induction, via an example and exercises.    Well-Ordering Principle      natural numbers     Natural Numbers  The collection of natural numbers is denoted by , and is the set .     Natural Numbers including  By we mean the set .    In some sense, the fundamental properties of are  A beginning: there is a smallest natural number  Succession: there is always a next natural number     Peano Axioms  In fact, one can build a model of with set theory and the Peano axioms, which utilize the notion of a successor --the next natural number.   A consequence of the Peano postulates is the well-ordering principle , which we state as an axiom.   Well-Ordering Principle     Well-Ordering Principle  Every nonempty subset of contains a least (smallest) element under the usual ordering, Our word choice is suggestive. In fact, other orderings do exist, and while the set of nonnegative real numbers does not satisfy the well-ordering principle under the usual ordering , the Well Ordering Axiom asserts that there exists a well ordering on any set, including . Accepting this axiom is equivalent to accepting the axiom of choice . .    The Well-Ordering Principle is useful for producing smallest elements of nonempty subsets defined to have certain properties, as the following example demonstrates.    In this exploration, we investigate polynomials with real coefficients, as well as their degrees. We will define these terms more formally in , but for now you may use your intuition from previous courses in algebra.  Let be the set of all polynomials in the variable with real coefficients such that and .   Give an example of an and .  Let be the set of possible degrees of polynomials in . Show that and .  Apply the Well-Ordering Principle to argue that has a least element. To what does this correspond in ?      Examples vary, but and suffice.  Since , we see that . Furthermore, the zero polynomial is not in , so the degrees of polynomials in are all nonnegative integers. Thus, .  We see that meets the conditions of the well-ordering principle, and so it has a least element. This least element is the degree of the polynomial of least degree satisfying and .     We will use this principle throughout the text, next in .     integers     Integers    The set of integers consists of the positive and negative natural numbers, together with zero, and is denoted by : .     Principle of Mathematical Induction   Principle of Mathematical Induction  Let be a statement for each . Suppose that  is true.  For all , if is true, then is true.  Then is true for all .   Suppose is a statement for each satisfying both properties above. Suppose, for a contradiction, that there exists some such that is not true. Let . Then by assumption so that is a nonempty subset of . By the Well-Ordering Principle , has a least element.  Let be the least element. Since is true, we know and so . Since was the least element we know that . Thus is true. Since is true, the second hypothesis tells us is true. This contradicts that is false. Since we have arrived at a contradiction, we conclude that is true for all .     Sample Statements for  Sample statements could include is really interesting or is even .   Mathematical induction is like climbing an infinite staircase. The base case tells us that we can take a first step on the staircase. In the inductive hypothesis , we assume we can take all the steps up to a certain height ( ). In the inductive step , we prove that this allows us to take the st step.  Thus, if we can take step , we can (by the inductive step) take step . And since we can take step , we can (again by the inductive step) take step . And so on, forever (or, if the notion of actual infinity makes you uncomfortable, as far as we want to go).   Induction vs Well-Ordering  It can be proved that the principle of mathematical induction is logically equivalent to the well-ordering principle. That is, if we assume either one to be true, we can deduce the other. We will generally take the well-ordering principle on to be an axiom, and treat induction as a theorem.   The following proposition is often referred to as the Gauss Summation Formula. We will employ two proof techniques. The first will be a proof using and the second will be a direct proof. In the inductive proof we will introduce some language that is typically used when performing a proof by induction.   Gauss Summation Formula   For all , .    Inductive Proof   Base case : When , the equation is true.   Inductive Hypothesis: Assume that there exists a such that whenever , the equation is true.   Inductive Step: Our goal is to show that is true. That is, we wish to establish that .  We begin on the left-hand side of , where we may apply the inductive hypothesis to see that . Through the use of straightforward algebra, the right-hand side becomes .  Putting and together, we obtain , which is exactly the goal we stated in .    Direct Proof  Let and consider the summation and the same summation written in reverse: Add these together termise: There are total terms so we arrive at and so . Thus     We choose to give two proofs of the Gauss Summation Formula to illustrate that induction is not always the easiest way to prove statements about natural numbers. However, it is a crucial tool in algebra and it's important to learn how to use our tools.  With the goal of understanding how to use our tools, we continue with another example of induction. This example shows how to manipulate inequalities within proofs.    For all , .    Let's start by labelling . By looking at the statement, should be:   Now that is clearly labelled, we will prove the base case which is . With our description, we have is the statement which is certainly true. This completes the proof of the base case.  For the inductive step, we suppose is true and prove that is also true. Given our description of the statements , assuming is true is assuming We now need to use this to show that is true. That is, we need to show . Before we perform computations let's also notice that . Now we compute: where the last inequality follows from implies . We conclude as desired.  This completes the proof by induction and we conclude for all .     Sum of Cubes Formula   Prove that the sum of the first cubes is . That is,     Inductive Proof  We wish to prove that    Base Case: When , the theorem clearly holds.   Inductive Hypothesis: Assume for all that we have    Inductive Step: We wish to prove that We apply to obtain The theorem is proved.     (Bernoulli's Inequality)  Given a real number , for all .   When the inequality becomes , which is clearly true.  Assume . Then .      Exercises   Please mark the following as true or false. An ordered set is well-ordered if every non-empty subset has a least element.   The Well-Ordering Axioms says every subset of has a least element.  The set of negative numbers is well-ordered.  The Well-Ordering Axioms says every non-empty subset of has a least element.  The set of rational numbers is well-ordered.  The Principle of Mathematical induction can be used to prove statements about all positive integers.  The base case of a proof by induction (or inductive proof) is to show the statement is true for a specific natural number.  The inductive step in a proof by induction is to show that if the statement is true for a natural number , then it is true for the next natural number .  To use mathematical induction to prove a statement about all non-negative integers, the base case is .  The principle of mathematical induction can be use to prove the statement .     Find the smallest element of these subsets of                   Find the smallest element of these subsets of                Here you will try out an inductive proof on your own. You'll be guided through a proof of the statement: For every  That is, the sum of the first squares can be computed as .   Identify what is and verify is true.   The statement is the equation in the statement for a given .    is the statement .  Thus is the statement which is certainly true.   All the glorious details about how to do the first step.   Verify that if is true, then so is must also be true.   Write out both statements and . Try to manipulate to get .   We first assume that is true. This means We need to show somehow that   Starting with , we   A little wrap up.    Find a formula for the sum of the first odd numbers by following the steps below.   Show by summing the first one, two, and three odd numbers, that a formula cannot be a linear function of . That is, it cannot be of the form for some .   Argue that a formula could possibly be a quadratic function of . Use your computations in the previous part to determine coefficients so that agrees with your sums for .   Prove your conjecture is correct.    Do the same as the previous exercise but with the summation     Prove for all , we have .    Prove for all , we have .    Prove for all , we have .    Formulate a problem similar to the previous three and prove it.   AM-GM Inequality  Given numbers . Prove that the arithmetic mean is at least the geometric mean:     Let be the Fibonacci numbers defined with initial values and recursion relation for all integers Prove that for all .    Find the first instance where . Then find such that for all .    Find the maximum number of regions into which the plane can be divided using lines.    Prove that if , then cents of postage can be made using only 5 cent and 12 cent stamps.    "
},
{
  "id": "obj_InductionWellordering",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#obj_InductionWellordering",
  "type": "Guiding Questions",
  "number": "1.1",
  "title": "",
  "body": "  In this section, we'll seek to answer the following questions:    What is the Well-Ordering Principle?  What is mathematical induction, and how can we use it to prove statements about ?   "
},
{
  "id": "def_naturalnumbers",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#def_naturalnumbers",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "    natural numbers     Natural Numbers  The collection of natural numbers is denoted by , and is the set .     Natural Numbers including  By we mean the set .   "
},
{
  "id": "axiom_wellordering",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#axiom_wellordering",
  "type": "Axiom",
  "number": "1.1.2",
  "title": "Well-Ordering Principle.",
  "body": " Well-Ordering Principle     Well-Ordering Principle  Every nonempty subset of contains a least (smallest) element under the usual ordering, Our word choice is suggestive. In fact, other orderings do exist, and while the set of nonnegative real numbers does not satisfy the well-ordering principle under the usual ordering , the Well Ordering Axiom asserts that there exists a well ordering on any set, including . Accepting this axiom is equivalent to accepting the axiom of choice . .   "
},
{
  "id": "ssec_wellordering-8",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#ssec_wellordering-8",
  "type": "Exploration",
  "number": "1.1.1",
  "title": "",
  "body": "  In this exploration, we investigate polynomials with real coefficients, as well as their degrees. We will define these terms more formally in , but for now you may use your intuition from previous courses in algebra.  Let be the set of all polynomials in the variable with real coefficients such that and .   Give an example of an and .  Let be the set of possible degrees of polynomials in . Show that and .  Apply the Well-Ordering Principle to argue that has a least element. To what does this correspond in ?      Examples vary, but and suffice.  Since , we see that . Furthermore, the zero polynomial is not in , so the degrees of polynomials in are all nonnegative integers. Thus, .  We see that meets the conditions of the well-ordering principle, and so it has a least element. This least element is the degree of the polynomial of least degree satisfying and .    "
},
{
  "id": "def_integers",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#def_integers",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  integers     Integers    The set of integers consists of the positive and negative natural numbers, together with zero, and is denoted by : .   "
},
{
  "id": "thm_mathematical_induction",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#thm_mathematical_induction",
  "type": "Theorem",
  "number": "1.1.4",
  "title": "Principle of Mathematical Induction.",
  "body": " Principle of Mathematical Induction  Let be a statement for each . Suppose that  is true.  For all , if is true, then is true.  Then is true for all .   Suppose is a statement for each satisfying both properties above. Suppose, for a contradiction, that there exists some such that is not true. Let . Then by assumption so that is a nonempty subset of . By the Well-Ordering Principle , has a least element.  Let be the least element. Since is true, we know and so . Since was the least element we know that . Thus is true. Since is true, the second hypothesis tells us is true. This contradicts that is false. Since we have arrived at a contradiction, we conclude that is true for all .   "
},
{
  "id": "prop_gauss_summation",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#prop_gauss_summation",
  "type": "Proposition",
  "number": "1.1.5",
  "title": "Gauss Summation Formula.",
  "body": " Gauss Summation Formula   For all , .    Inductive Proof   Base case : When , the equation is true.   Inductive Hypothesis: Assume that there exists a such that whenever , the equation is true.   Inductive Step: Our goal is to show that is true. That is, we wish to establish that .  We begin on the left-hand side of , where we may apply the inductive hypothesis to see that . Through the use of straightforward algebra, the right-hand side becomes .  Putting and together, we obtain , which is exactly the goal we stated in .    Direct Proof  Let and consider the summation and the same summation written in reverse: Add these together termise: There are total terms so we arrive at and so . Thus    "
},
{
  "id": "basic_induction_inequality",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#basic_induction_inequality",
  "type": "Proposition",
  "number": "1.1.6",
  "title": "",
  "body": "  For all , .    Let's start by labelling . By looking at the statement, should be:   Now that is clearly labelled, we will prove the base case which is . With our description, we have is the statement which is certainly true. This completes the proof of the base case.  For the inductive step, we suppose is true and prove that is also true. Given our description of the statements , assuming is true is assuming We now need to use this to show that is true. That is, we need to show . Before we perform computations let's also notice that . Now we compute: where the last inequality follows from implies . We conclude as desired.  This completes the proof by induction and we conclude for all .   "
},
{
  "id": "ssec_induction-12",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#ssec_induction-12",
  "type": "Theorem",
  "number": "1.1.7",
  "title": "Sum of Cubes Formula.",
  "body": " Sum of Cubes Formula   Prove that the sum of the first cubes is . That is,     Inductive Proof  We wish to prove that    Base Case: When , the theorem clearly holds.   Inductive Hypothesis: Assume for all that we have    Inductive Step: We wish to prove that We apply to obtain The theorem is proved.   "
},
{
  "id": "ssec_induction-13",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#ssec_induction-13",
  "type": "Theorem",
  "number": "1.1.8",
  "title": "(Bernoulli’s Inequality).",
  "body": " (Bernoulli's Inequality)  Given a real number , for all .   When the inequality becomes , which is clearly true.  Assume . Then .   "
},
{
  "id": "sec-induction-tf",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#sec-induction-tf",
  "type": "Exercise",
  "number": "1.1.3.1",
  "title": "",
  "body": " Please mark the following as true or false. An ordered set is well-ordered if every non-empty subset has a least element.   The Well-Ordering Axioms says every subset of has a least element.  The set of negative numbers is well-ordered.  The Well-Ordering Axioms says every non-empty subset of has a least element.  The set of rational numbers is well-ordered.  The Principle of Mathematical induction can be used to prove statements about all positive integers.  The base case of a proof by induction (or inductive proof) is to show the statement is true for a specific natural number.  The inductive step in a proof by induction is to show that if the statement is true for a natural number , then it is true for the next natural number .  To use mathematical induction to prove a statement about all non-negative integers, the base case is .  The principle of mathematical induction can be use to prove the statement .   "
},
{
  "id": "sec-induction-smallest-elements1",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#sec-induction-smallest-elements1",
  "type": "Exercise",
  "number": "1.1.3.2",
  "title": "",
  "body": " Find the smallest element of these subsets of                 "
},
{
  "id": "sec-induction-smallest-elements2",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#sec-induction-smallest-elements2",
  "type": "Exercise",
  "number": "1.1.3.3",
  "title": "",
  "body": " Find the smallest element of these subsets of              "
},
{
  "id": "sec_inductionWellOrdering-7-5",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#sec_inductionWellOrdering-7-5",
  "type": "Exercise",
  "number": "1.1.3.4",
  "title": "",
  "body": " Here you will try out an inductive proof on your own. You'll be guided through a proof of the statement: For every  That is, the sum of the first squares can be computed as .   Identify what is and verify is true.   The statement is the equation in the statement for a given .    is the statement .  Thus is the statement which is certainly true.   All the glorious details about how to do the first step.   Verify that if is true, then so is must also be true.   Write out both statements and . Try to manipulate to get .   We first assume that is true. This means We need to show somehow that   Starting with , we   A little wrap up.  "
},
{
  "id": "sec_inductionWellOrdering-7-6",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#sec_inductionWellOrdering-7-6",
  "type": "Exercise",
  "number": "1.1.3.5",
  "title": "",
  "body": " Find a formula for the sum of the first odd numbers by following the steps below.   Show by summing the first one, two, and three odd numbers, that a formula cannot be a linear function of . That is, it cannot be of the form for some .   Argue that a formula could possibly be a quadratic function of . Use your computations in the previous part to determine coefficients so that agrees with your sums for .   Prove your conjecture is correct.  "
},
{
  "id": "sec_inductionWellOrdering-7-7",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#sec_inductionWellOrdering-7-7",
  "type": "Exercise",
  "number": "1.1.3.6",
  "title": "",
  "body": " Do the same as the previous exercise but with the summation   "
},
{
  "id": "sec_inductionWellOrdering-7-8",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#sec_inductionWellOrdering-7-8",
  "type": "Exercise",
  "number": "1.1.3.7",
  "title": "",
  "body": " Prove for all , we have .  "
},
{
  "id": "sec_inductionWellOrdering-7-9",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#sec_inductionWellOrdering-7-9",
  "type": "Exercise",
  "number": "1.1.3.8",
  "title": "",
  "body": " Prove for all , we have .  "
},
{
  "id": "sec_inductionWellOrdering-7-10",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#sec_inductionWellOrdering-7-10",
  "type": "Exercise",
  "number": "1.1.3.9",
  "title": "",
  "body": " Prove for all , we have .  "
},
{
  "id": "sec_inductionWellOrdering-7-11",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#sec_inductionWellOrdering-7-11",
  "type": "Exercise",
  "number": "1.1.3.10",
  "title": "",
  "body": " Formulate a problem similar to the previous three and prove it.  "
},
{
  "id": "sec_inductionWellOrdering-7-12",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#sec_inductionWellOrdering-7-12",
  "type": "Exercise",
  "number": "1.1.3.11",
  "title": "AM-GM Inequality.",
  "body": "AM-GM Inequality  Given numbers . Prove that the arithmetic mean is at least the geometric mean:   "
},
{
  "id": "fibonacci-numbers",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#fibonacci-numbers",
  "type": "Exercise",
  "number": "1.1.3.12",
  "title": "",
  "body": " Let be the Fibonacci numbers defined with initial values and recursion relation for all integers Prove that for all .  "
},
{
  "id": "sec_inductionWellOrdering-7-14",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#sec_inductionWellOrdering-7-14",
  "type": "Exercise",
  "number": "1.1.3.13",
  "title": "",
  "body": " Find the first instance where . Then find such that for all .  "
},
{
  "id": "sec_inductionWellOrdering-7-15",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#sec_inductionWellOrdering-7-15",
  "type": "Exercise",
  "number": "1.1.3.14",
  "title": "",
  "body": " Find the maximum number of regions into which the plane can be divided using lines.  "
},
{
  "id": "sec_inductionWellOrdering-7-16",
  "level": "2",
  "url": "sec_inductionWellOrdering.html#sec_inductionWellOrdering-7-16",
  "type": "Exercise",
  "number": "1.1.3.15",
  "title": "",
  "body": " Prove that if , then cents of postage can be made using only 5 cent and 12 cent stamps.  "
},
{
  "id": "sec-divisibility-gcd",
  "level": "1",
  "url": "sec-divisibility-gcd.html",
  "type": "Section",
  "number": "1.2",
  "title": "Divisibility and GCDs in the Integers",
  "body": " Divisibility and GCDs in the Integers    In this section, we'll seek to answer the questions:    What does it mean for one integer to divide another?  What properties does divisibility enjoy in the integers?  What is the greatest common divisor of two integers?  How can we compute the greatest common divisor of two integers?     Divisibility and the Division Algorithm  In this section, we begin to explore some of the arithmetic and algebraic properties of . We focus specifically on the divisibility and factorization properties of the integers, as these are the main focus of the text as a whole. One of the primary goals of this section is to formalize definitions that you are likely already familiar with and of which you have an intuitive understanding. At first, this might seem to unnecessarily complicate matters. However, it will become clear as we move forward that formal mathematical language and notation are necessary to extend these properties to a more abstract setting. We begin with a familiar notion.      Divides   divides (integers)  factor (integers)  Let . We say that  divides  , and write , if there is an integer such that . In this case, say that and are factors of . If no such exists, we write .    Note that the symbol is a verb ; it is therefore correct to say, e.g., , as 2 does divide 4. However, it is an abuse of notation to say that . Instead, we likely mean or (though we will not deal in fractions just yet).    Determine whether if:    ,      ,      ,      ,    Comment briefly on the results of this investigation. What did you notice? What do you still wonder?    TBD.    We next collect several standard results about divisibility in which will be used extensively in the remainder of this text.    Let . If and , then .    Our hypothesis means that there exist integers and such that and . Then . Let , and observe that is an integer; then , so .      Let . If , then .    Our hypotheses means there is an integer for which . Then . We observe that is an integer, so , and therefore .      Consider the following partial converse to : If with , must or ? Supply a proof or give a counterexample.    The converse is false: , but and .      Let . If and divides any two of , then divides the third.    We consider two cases.   Case 1: Assume without loss of generality that and . Then there are integers such that and . We observe that , so .   Case 2: Assume that and , so there are such that and . Then , so .      Formulate a conjecture akin to the previous theorems about divisibility in , and then prove it.    Answers vary.    As we saw above, not all pairs of integers satisfy or . However, our experience in elementary mathematics does apply: there is often something left over (a remainder) . The following theorem formalizes this idea for .   The Division Algorithm for  Division Algorithm ( )   Let . Then there exist unique integers such that , where .    There are two parts to this theorem. First, you must establish that and exist. This is best done via . If you're stuck on that, check the second hint.  Once you have established that and exist, show that they are unique but assuming and , where both satisfy the conditions of the theorem. Argue that and .    Let .    First, assume that . Then and are sufficient. If , then and will work.  Now, assume that . Then the set is nonempty, as . By , has a least element, which we will call . Let be such that ; then .  To finish the proof, it is enough to show that this choice of satisfies . Observe that , so . If , then . Since , this is a contradiction to the assumption that was the largest element of . Thus, , i.e., .  Let be such that and . We see that , so , so . If , we are done.  Otherwise, is a nonzero multiple of . If , then , a contradiction. Similarly, if , write , and a symmetric argument leads to a contradiction.  Thus, , so , and since , , i.e., .     Warning!  This theorem has two parts: existence and uniqueness. Do not try to prove them both at the same time.   Unsurprisingly, the Division Algorithm also holds in , though the existence of negative integers requires a careful restatement.    The Division Algorithm for  Division Algorithm ( )   Let with . Then there exist unique integers such that , where .    Consider cases, and apply wherever possible.    TBD.      Greatest Common Divisors  We next turn to another familiar property of the integers: the existence of greatest common divisors.   greatest common divisor ( )    Greatest Common Divisor of    Let such that and are not both 0. A greatest common divisor of and , denoted , is a natural number satisfying    and     if and and , then .     If , we say that and are relatively prime or coprime . This formalizes the idea of greatest common factors that is introduced around sixth grade .     This definition may be different than the one you are used to, which likely stated that rather than condition 2 in . It can be proved using the order relations of that the definition given here is equivalent to that one. However, we will prefer this definition, as it generalizes naturally to other number systems which do not have an order relation like .    Compute if:    ,      ,      ,    Now that you have had a bit of practice computing gcds, describe your method for finding them in a sentence or two.    TBD.    How did you answer the last question in ? If you are like the authors' classes, the answers probably varied, though you have referred at some point to a \"prime\" ( whatever those are ), or possibly some other ad hoc method for finding the gcd. Most such methods rely in some form on our ability to factor integers. However, the problem of factoring arbitrary integers is actually surprisingly computationally intensive. Thankfully, there is another way to compute , to which we now turn.    Let such that with and not both zero. Then .    Let and . Since and , , and so by definition.  Similarly, since and , , so by definition.  Thus, .      Suppose such that there exists with and and not both zero. Prove or disprove: .   TBD.      (Euclidean Algorithm)  Euclidean Algorithm   Let . Use and to determine an algorithm for computing . How could your method be modified to compute for ?    Let . Write . By Theorem , .  Then, write using the Division algorithm. Observe . Continue until there is a for which , so . Then .      Use the Euclidean algorithm to compute .    We write .  So .    The following identity provides a useful characterization of the greatest common divisor of two integers, not both zero. We will return to this idea several times, even after we have left the familiar realm of the integers.   Bézout's Identity  Bézout's Identity   For any integers and not both 0, there are integers and such that .    Apply to a well-chosen set.    Apply to .    Consider the set . We first show that .  Suppose without loss of generality that , and consider ; then is sufficient to guarantee . If , then is sufficient. Regardless, , and by the Well-Ordering Principle, has a least element, . We claim .  We first show that Use the division algorithm to write , where . We find , and if , , contradicting the status of as the least element of . Thus, , and . By a symmetric proof, .  Suppose then that is a common divisor of and ; write and . Then , whence . Therefore, .    We conclude with an answer to the questions raised by .    Let , and be integers. If and , then .    Suppose . By Theorem , there are integers and such that .  Multiply by to get .  Since by assumption, there is an integer such that , so we have , so .      In this section, we have collected some initial results about divisibility in the integers. We'll next explore the multiplicative building blocks of the integers, the primes, in preparation for a deeper exploration of factorization.    Exercises   Mark the following as true or false.   If , then .  If , then or .  If , then .  There exists integers such that .  The greatest common divisor of and is a divisor of both and .  The greatest common divisor of any two integers is always positive.  It makes sense to define the greatest common divisor of any finite number of integers.  The greatest common divisor of 0 and 0 is 0.  For any pair of integers , not both zero, there exists integers and so that (the least common multiple).     Apply the Division Algorithm to determine the quotient and remainder for the following pairs of integers:             For each of the pairs of integers in determine their greatest common divisor .    For each of the pairs of integers in find Bézout coefficients. That is, find such that .    Use induction to prove that for any  .    Use induction to prove that for any  .    Use induction to prove that for any  .    Suppose are integers such taht and . Prove .    Prove for any integers , is divisible by 4.    A perfect number is a positive integer that is the sum of its proper (non-equal) divisors. For example, is a perfect number as . Find the next perfect number.    Let be the th Fibonacci Number, see . Prove that is divisible by for all .    Prove that no partial sum of the harmonic series can be an integer for . Here the th partial sum of the harmonic series is:     Show that Bézout coefficients are not unique. Can you find a formula for all of them?    "
},
{
  "id": "obj_divisibility-gcd",
  "level": "2",
  "url": "sec-divisibility-gcd.html#obj_divisibility-gcd",
  "type": "Guiding Questions",
  "number": "1.2",
  "title": "",
  "body": "  In this section, we'll seek to answer the questions:    What does it mean for one integer to divide another?  What properties does divisibility enjoy in the integers?  What is the greatest common divisor of two integers?  How can we compute the greatest common divisor of two integers?   "
},
{
  "id": "sec-divisibility-gcd-3-3",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-3-3",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "    Divides   divides (integers)  factor (integers)  Let . We say that  divides  , and write , if there is an integer such that . In this case, say that and are factors of . If no such exists, we write .   "
},
{
  "id": "sec-divisibility-gcd-3-5",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-3-5",
  "type": "Investigation",
  "number": "1.2.1",
  "title": "",
  "body": "  Determine whether if:    ,      ,      ,      ,    Comment briefly on the results of this investigation. What did you notice? What do you still wonder?    TBD.   "
},
{
  "id": "sec-divisibility-gcd-3-7",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-3-7",
  "type": "Theorem",
  "number": "1.2.2",
  "title": "",
  "body": "  Let . If and , then .    Our hypothesis means that there exist integers and such that and . Then . Let , and observe that is an integer; then , so .   "
},
{
  "id": "thm-divideproduct",
  "level": "2",
  "url": "sec-divisibility-gcd.html#thm-divideproduct",
  "type": "Theorem",
  "number": "1.2.3",
  "title": "",
  "body": "  Let . If , then .    Our hypotheses means there is an integer for which . Then . We observe that is an integer, so , and therefore .   "
},
{
  "id": "invest-divideproduct",
  "level": "2",
  "url": "sec-divisibility-gcd.html#invest-divideproduct",
  "type": "Investigation",
  "number": "1.2.2",
  "title": "",
  "body": "  Consider the following partial converse to : If with , must or ? Supply a proof or give a counterexample.    The converse is false: , but and .   "
},
{
  "id": "theorem_23lemmageneralization",
  "level": "2",
  "url": "sec-divisibility-gcd.html#theorem_23lemmageneralization",
  "type": "Theorem",
  "number": "1.2.4",
  "title": "",
  "body": "  Let . If and divides any two of , then divides the third.    We consider two cases.   Case 1: Assume without loss of generality that and . Then there are integers such that and . We observe that , so .   Case 2: Assume that and , so there are such that and . Then , so .   "
},
{
  "id": "sec-divisibility-gcd-3-11",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-3-11",
  "type": "Investigation",
  "number": "1.2.3",
  "title": "",
  "body": "  Formulate a conjecture akin to the previous theorems about divisibility in , and then prove it.    Answers vary.   "
},
{
  "id": "thm_divisionAlgorithm",
  "level": "2",
  "url": "sec-divisibility-gcd.html#thm_divisionAlgorithm",
  "type": "Theorem",
  "number": "1.2.5",
  "title": "The Division Algorithm for <span class=\"process-math\">\\(\\N\\)<\/span>.",
  "body": " The Division Algorithm for  Division Algorithm ( )   Let . Then there exist unique integers such that , where .    There are two parts to this theorem. First, you must establish that and exist. This is best done via . If you're stuck on that, check the second hint.  Once you have established that and exist, show that they are unique but assuming and , where both satisfy the conditions of the theorem. Argue that and .    Let .    First, assume that . Then and are sufficient. If , then and will work.  Now, assume that . Then the set is nonempty, as . By , has a least element, which we will call . Let be such that ; then .  To finish the proof, it is enough to show that this choice of satisfies . Observe that , so . If , then . Since , this is a contradiction to the assumption that was the largest element of . Thus, , i.e., .  Let be such that and . We see that , so , so . If , we are done.  Otherwise, is a nonzero multiple of . If , then , a contradiction. Similarly, if , write , and a symmetric argument leads to a contradiction.  Thus, , so , and since , , i.e., .   "
},
{
  "id": "sec-divisibility-gcd-3-16",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-3-16",
  "type": "Corollary",
  "number": "1.2.6",
  "title": "The Division Algorithm for <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": " The Division Algorithm for  Division Algorithm ( )   Let with . Then there exist unique integers such that , where .    Consider cases, and apply wherever possible.    TBD.   "
},
{
  "id": "def_gcdZ",
  "level": "2",
  "url": "sec-divisibility-gcd.html#def_gcdZ",
  "type": "Definition",
  "number": "1.2.7",
  "title": "",
  "body": " greatest common divisor ( )    Greatest Common Divisor of    Let such that and are not both 0. A greatest common divisor of and , denoted , is a natural number satisfying    and     if and and , then .     If , we say that and are relatively prime or coprime . This formalizes the idea of greatest common factors that is introduced around sixth grade .    "
},
{
  "id": "act-gcdcomputations",
  "level": "2",
  "url": "sec-divisibility-gcd.html#act-gcdcomputations",
  "type": "Activity",
  "number": "1.2.4",
  "title": "",
  "body": "  Compute if:    ,      ,      ,    Now that you have had a bit of practice computing gcds, describe your method for finding them in a sentence or two.    TBD.   "
},
{
  "id": "sec-divisibility-gcd-4-7",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-4-7",
  "type": "Theorem",
  "number": "1.2.8",
  "title": "",
  "body": "  Let such that with and not both zero. Then .    Let and . Since and , , and so by definition.  Similarly, since and , , so by definition.  Thus, .   "
},
{
  "id": "invest_gcdremainder",
  "level": "2",
  "url": "sec-divisibility-gcd.html#invest_gcdremainder",
  "type": "Investigation",
  "number": "1.2.5",
  "title": "",
  "body": "  Suppose such that there exists with and and not both zero. Prove or disprove: .   TBD.  "
},
{
  "id": "invest-euclid-alg-integers",
  "level": "2",
  "url": "sec-divisibility-gcd.html#invest-euclid-alg-integers",
  "type": "Investigation",
  "number": "1.2.6",
  "title": "(Euclidean Algorithm).",
  "body": " (Euclidean Algorithm)  Euclidean Algorithm   Let . Use and to determine an algorithm for computing . How could your method be modified to compute for ?    Let . Write . By Theorem , .  Then, write using the Division algorithm. Observe . Continue until there is a for which , so . Then .   "
},
{
  "id": "sec-divisibility-gcd-4-10",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-4-10",
  "type": "Activity",
  "number": "1.2.7",
  "title": "",
  "body": "  Use the Euclidean algorithm to compute .    We write .  So .   "
},
{
  "id": "thm_bezoutIdentity",
  "level": "2",
  "url": "sec-divisibility-gcd.html#thm_bezoutIdentity",
  "type": "Theorem",
  "number": "1.2.9",
  "title": "Bézout’s Identity.",
  "body": " Bézout's Identity  Bézout's Identity   For any integers and not both 0, there are integers and such that .    Apply to a well-chosen set.    Apply to .    Consider the set . We first show that .  Suppose without loss of generality that , and consider ; then is sufficient to guarantee . If , then is sufficient. Regardless, , and by the Well-Ordering Principle, has a least element, . We claim .  We first show that Use the division algorithm to write , where . We find , and if , , contradicting the status of as the least element of . Thus, , and . By a symmetric proof, .  Suppose then that is a common divisor of and ; write and . Then , whence . Therefore, .   "
},
{
  "id": "theorem_relprimecancel",
  "level": "2",
  "url": "sec-divisibility-gcd.html#theorem_relprimecancel",
  "type": "Theorem",
  "number": "1.2.10",
  "title": "",
  "body": "  Let , and be integers. If and , then .    Suppose . By Theorem , there are integers and such that .  Multiply by to get .  Since by assumption, there is an integer such that , so we have , so .   "
},
{
  "id": "sec-divisibility-gcd-tf",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-tf",
  "type": "Exercise",
  "number": "1.2.3.1",
  "title": "",
  "body": " Mark the following as true or false.   If , then .  If , then or .  If , then .  There exists integers such that .  The greatest common divisor of and is a divisor of both and .  The greatest common divisor of any two integers is always positive.  It makes sense to define the greatest common divisor of any finite number of integers.  The greatest common divisor of 0 and 0 is 0.  For any pair of integers , not both zero, there exists integers and so that (the least common multiple).   "
},
{
  "id": "sec-divisibility-gcd-quorem",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-quorem",
  "type": "Exercise",
  "number": "1.2.3.2",
  "title": "",
  "body": " Apply the Division Algorithm to determine the quotient and remainder for the following pairs of integers:           "
},
{
  "id": "sec-divisibility-gcd-gcds",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-gcds",
  "type": "Exercise",
  "number": "1.2.3.3",
  "title": "",
  "body": " For each of the pairs of integers in determine their greatest common divisor .  "
},
{
  "id": "sec-divisibility-gcd-bezout-coeff",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-bezout-coeff",
  "type": "Exercise",
  "number": "1.2.3.4",
  "title": "",
  "body": " For each of the pairs of integers in find Bézout coefficients. That is, find such that .  "
},
{
  "id": "sec-divisibility-gcd-exercises-6",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-exercises-6",
  "type": "Exercise",
  "number": "1.2.3.5",
  "title": "",
  "body": " Use induction to prove that for any  .  "
},
{
  "id": "sec-divisibility-gcd-exercises-7",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-exercises-7",
  "type": "Exercise",
  "number": "1.2.3.6",
  "title": "",
  "body": " Use induction to prove that for any  .  "
},
{
  "id": "sec-divisibility-gcd-exercises-8",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-exercises-8",
  "type": "Exercise",
  "number": "1.2.3.7",
  "title": "",
  "body": " Use induction to prove that for any  .  "
},
{
  "id": "sec-divisibility-gcd-exercises-9",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-exercises-9",
  "type": "Exercise",
  "number": "1.2.3.8",
  "title": "",
  "body": " Suppose are integers such taht and . Prove .  "
},
{
  "id": "sec-divisibility-gcd-exercises-10",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-exercises-10",
  "type": "Exercise",
  "number": "1.2.3.9",
  "title": "",
  "body": " Prove for any integers , is divisible by 4.  "
},
{
  "id": "sec-divisibility-gcd-exercises-11",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-exercises-11",
  "type": "Exercise",
  "number": "1.2.3.10",
  "title": "",
  "body": " A perfect number is a positive integer that is the sum of its proper (non-equal) divisors. For example, is a perfect number as . Find the next perfect number.  "
},
{
  "id": "sec-divisibility-gcd-exercises-12",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-exercises-12",
  "type": "Exercise",
  "number": "1.2.3.11",
  "title": "",
  "body": " Let be the th Fibonacci Number, see . Prove that is divisible by for all .  "
},
{
  "id": "sec-divisibility-gcd-exercises-13",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-exercises-13",
  "type": "Exercise",
  "number": "1.2.3.12",
  "title": "",
  "body": " Prove that no partial sum of the harmonic series can be an integer for . Here the th partial sum of the harmonic series is:   "
},
{
  "id": "sec-divisibility-gcd-exercises-14",
  "level": "2",
  "url": "sec-divisibility-gcd.html#sec-divisibility-gcd-exercises-14",
  "type": "Exercise",
  "number": "1.2.3.13",
  "title": "",
  "body": " Show that Bézout coefficients are not unique. Can you find a formula for all of them?  "
},
{
  "id": "sec-primesFactorization",
  "level": "1",
  "url": "sec-primesFactorization.html",
  "type": "Section",
  "number": "1.3",
  "title": "Primes and Factorization",
  "body": " Primes and Factorization    In this section, we'll seek to answer the questions:    What are primes? What properties do they have?  What does the Fundamental Theorem of Arithmetic say?  Why is the Fundamental Theorem of Arithmetic true?     As described in Section 1.1 , our main goal is to build a deep structural understanding of the notion of factorization . That is, splitting objects (e.g., numbers, polynomials, matrices) into products of other objects. One of the most familiar examples of this process involves factoring integers into products of primes.    Prime Numbers  We begin with the proper mathematical definition of prime .    prime (integers)  composite (integers)  Let be a natural number. We say is prime if whenever such that , either or .  A natural number is said to be composite if it is not prime.    This is almost certainly not the definition of prime that you are familiar with from your school days, which likely said something to the effect that a prime is a natural number only divisible by 1 and itself. However, is often more useful than the usual definition. And, as demonstrates, the two notions are equivalent.   Euclid's Lemma  Euclid's Lemma   Given any , , is prime if and only if whenever divides , either or .    Let be prime and suppose divides , so for some . By definition, or . If , then , so , and , which means and thus . If , then , so , and , so .  Conversely, assume has the property that whenever an integer exists with , then or . Suppose , so there exists a such that . Note that if , then , and so , and then . If , then by Bézout's Identity there are integers and such that , so we may multiply by to obtain , whence .      Using as a guide, give a biconditional characterization for composite numbers. That is, finish the sentence: A number is composite if and only if ....      A number is composite if and only if there exist natural numbers such that .      How does your definition treat the number 1? The primality of 1 has been the subject of much debate stretching back to the Greeks (most of whom did not consider 1 to be a number). Throughout history, mathematicians have at times viewed 1 as prime, and at other times, not prime. The main argument for the non-primality of 1 is that if 1 were taken to be prime, we would need to word theorems like the Fundamental Theorem of Arithmetic (below) in such a way that only prime factorizations not including 1 can be considered. For, if 1 is prime, we would have to consider, e.g., as three different factorizations of 6 into primes.  However, neither is 1 composite (your definition should rule this out in some way). Instead, we call 1 a unit , which we'll explore more fully in and the following; consequently, the opposite of \"prime\" is not \"composite\", but \"not prime\".     Let such that . Then there is a prime such that .    We proceed by mathematical induction. Note that when , the statement holds.  Assume that there is a such that for all , the statement holds. Consider . If is prime, we are done. If not, then is composite, and by the answer to Question , there are integers such that . By induction, there is a prime such that , so .      Suppose and are primes with . Then .   Since , we know . By Euclid's Lemma , the only possible divisors of are . It follows that .     Fundamental Theorem of Arithmetic  Our first major theorem makes two claims: that positive integers greater than 1 can be factored into products of primes, and that this factorization can happen in only one way. As the semester progresses, we will see other theorems like this one, and catch glimpses of other ways to think about the unique factorization property .   Fundamental Theorem of Arithmetic  Fundamental Theorem of Arithmetic   Every natural number greater than 1 is either a prime number or it can be expressed as a finite product of prime numbers where the expression is unique up to the order of the factors.    The proof is broken into two parts: existence ( ) and uniqueness ( ).   Fundamental Theorem of Arithmetic Existence Part This approach to the Fundamental Theorem of Arithmetic is adapted from .    Every natural number is either a prime number or it can be expressed as a finite product of prime numbers. That is, for every natural number , there exist primes and natural numbers such that .    Induction!     It is enough to show that, if , we may write , where the 's are not necessarily distinct primes. Then we can collect the common primes and write them with exponent notation.  Note that when , there is such an expression, so let be the least positive integer that fails to be expressed as above. We note that cannot be prime, or it could be expressed as above. Thus, by Theorem 2.1, there is a prime such that , where . Since was the least positive integer that cannot be factored as a product of primes, has a prime factorization. But then so does , a contradiction.     Let and all be primes and let be a natural number such that . Then for some .     We first state a claim that will be useful.   Claim 1: If are primes such that , then .   Proof of Claim 1: Since and both and are prime, by the definition of primality.   Now assume that . If , we're done by Claim 1. If not, the definition of a prime guarantees that . If , we're done by Claim 1. Otherwise, .  Repeating this process, we see that either for some , or . Now the definition of a prime guarantees that or , in which case Claim 1 requires that or .    Fundamental Theorem of Arithmetic Uniqueness Part   Let be a natural number. Let and be sets of primes with if and if . Let and be sets of natural numbers such that .  Then and . That is, the sets of primes are equal but their elements are not necessarily listed in the same order (i.e., may or may not equal ). Moreover, if , then . In other words, if we express the same natural number as a product of distinct primes, then the expressions are identical except for the ordering of the factors.    Argue that the two sets are equal (how do we do that?). Then argue that the exponents must also be equal.     Without loss of generality, assume and . Given a , we know that , which implies that for some by Claim 2 in the proof of Lemma 2.8. Further, Lemma 2.8 implies that , and similarly, given a , for some . Thus, , and by the ordering of the 's and 's, we have , . Therefore, .  Now, assume by way of contradiction, that for some . Without loss of generality, we may assume . Then , which implies that .  Since , we have that , from which for some by Lemma 2.8. This is a contradiction, so for .   Our first major result is in hand: we can factor natural numbers uniquely as a product of primes. Much of the rest of this book seeks to deduce a generalization of this result that relies on structural arithmetic properties enjoyed by and similar objects.    Exercises   Mark the following as true or false.   Every even number is composite.  The sum of two prime numbers is prime.  The product of two prime numbers is prime.  Every odd number is composite.  If a prime divides the product of two integers, it must divide at least one of the integers.  Every composite number has at least two distinct prime factors.  The product of two compposite numbers is always composite.  There are infinitely many composite numbers.     List the prime numbers between 50 and 100.    Compute the prime factorization of:                  Determine if the following numbers are prime:                        For each of the pairs of integers in find Bézout coefficients. That is, find such that .    Another way of computing the gcd is to compute the prime factorizations of two numbers and seeing what they share. Use this method to compute .    Find the prime factorization of 100!.    Prove that there are infinitely many prime numbers.    Suppose are such that . Prove .    Suppose are such that . Prove that .    Suppose is a prime number and is such that for some . Use the Fundamental Theorem of Arithmetic to prove . Show this is false if is not prime.    Find the smallest natural number that has exactly 10 distinct prime factors.    Using and matehmatical induction, prove that if is prime and for some , then . This is an alternate proof of .    Show that if , then it is not necessarily true that . However, prove that if , then .     D. Marshall, E. Odell, M. Starbird, Number Theory Through Inquiry , MAA Textbooks, Mathematical Association of America, 2007   "
},
{
  "id": "obj_primesFactorization",
  "level": "2",
  "url": "sec-primesFactorization.html#obj_primesFactorization",
  "type": "Guiding Questions",
  "number": "1.3",
  "title": "",
  "body": "  In this section, we'll seek to answer the questions:    What are primes? What properties do they have?  What does the Fundamental Theorem of Arithmetic say?  Why is the Fundamental Theorem of Arithmetic true?   "
},
{
  "id": "def_primeInteger",
  "level": "2",
  "url": "sec-primesFactorization.html#def_primeInteger",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  prime (integers)  composite (integers)  Let be a natural number. We say is prime if whenever such that , either or .  A natural number is said to be composite if it is not prime.   "
},
{
  "id": "thm_euclidsLemma",
  "level": "2",
  "url": "sec-primesFactorization.html#thm_euclidsLemma",
  "type": "Lemma",
  "number": "1.3.2",
  "title": "Euclid’s Lemma.",
  "body": " Euclid's Lemma  Euclid's Lemma   Given any , , is prime if and only if whenever divides , either or .    Let be prime and suppose divides , so for some . By definition, or . If , then , so , and , which means and thus . If , then , so , and , so .  Conversely, assume has the property that whenever an integer exists with , then or . Suppose , so there exists a such that . Note that if , then , and so , and then . If , then by Bézout's Identity there are integers and such that , so we may multiply by to obtain , whence .   "
},
{
  "id": "question_compositecharacterization",
  "level": "2",
  "url": "sec-primesFactorization.html#question_compositecharacterization",
  "type": "Exploration",
  "number": "1.3.1",
  "title": "",
  "body": "  Using as a guide, give a biconditional characterization for composite numbers. That is, finish the sentence: A number is composite if and only if ....      A number is composite if and only if there exist natural numbers such that .    "
},
{
  "id": "ssec_primeNumbers-7",
  "level": "2",
  "url": "sec-primesFactorization.html#ssec_primeNumbers-7",
  "type": "Remark",
  "number": "1.3.3",
  "title": "",
  "body": " How does your definition treat the number 1? The primality of 1 has been the subject of much debate stretching back to the Greeks (most of whom did not consider 1 to be a number). Throughout history, mathematicians have at times viewed 1 as prime, and at other times, not prime. The main argument for the non-primality of 1 is that if 1 were taken to be prime, we would need to word theorems like the Fundamental Theorem of Arithmetic (below) in such a way that only prime factorizations not including 1 can be considered. For, if 1 is prime, we would have to consider, e.g., as three different factorizations of 6 into primes.  However, neither is 1 composite (your definition should rule this out in some way). Instead, we call 1 a unit , which we'll explore more fully in and the following; consequently, the opposite of \"prime\" is not \"composite\", but \"not prime\".  "
},
{
  "id": "ssec_primeNumbers-8",
  "level": "2",
  "url": "sec-primesFactorization.html#ssec_primeNumbers-8",
  "type": "Theorem",
  "number": "1.3.4",
  "title": "",
  "body": "  Let such that . Then there is a prime such that .    We proceed by mathematical induction. Note that when , the statement holds.  Assume that there is a such that for all , the statement holds. Consider . If is prime, we are done. If not, then is composite, and by the answer to Question , there are integers such that . By induction, there is a prime such that , so .   "
},
{
  "id": "ssec_primeNumbers-9",
  "level": "2",
  "url": "sec-primesFactorization.html#ssec_primeNumbers-9",
  "type": "Theorem",
  "number": "1.3.5",
  "title": "",
  "body": "  Suppose and are primes with . Then .   Since , we know . By Euclid's Lemma , the only possible divisors of are . It follows that .  "
},
{
  "id": "thm_fundamentalTheoremOfArithmetic",
  "level": "2",
  "url": "sec-primesFactorization.html#thm_fundamentalTheoremOfArithmetic",
  "type": "Theorem",
  "number": "1.3.6",
  "title": "Fundamental Theorem of Arithmetic.",
  "body": " Fundamental Theorem of Arithmetic  Fundamental Theorem of Arithmetic   Every natural number greater than 1 is either a prime number or it can be expressed as a finite product of prime numbers where the expression is unique up to the order of the factors.   "
},
{
  "id": "theorem_FTAexistence",
  "level": "2",
  "url": "sec-primesFactorization.html#theorem_FTAexistence",
  "type": "Theorem",
  "number": "1.3.7",
  "title": "Fundamental Theorem of Arithmetic–Existence Part<details class=\"ptx-footnote\" aria-live=\"polite\" id=\"theorem_FTAexistence-1-2\"><summary class=\"ptx-footnote__number\" title=\"Footnote 1.3.1\"><sup> 1 <\/sup><\/summary><div class=\"ptx-footnote__contents\" id=\"theorem_FTAexistence-1-2\">This approach to the Fundamental Theorem of Arithmetic is adapted from [1.3.4.1].<\/div><\/details>.",
  "body": " Fundamental Theorem of Arithmetic Existence Part This approach to the Fundamental Theorem of Arithmetic is adapted from .    Every natural number is either a prime number or it can be expressed as a finite product of prime numbers. That is, for every natural number , there exist primes and natural numbers such that .    Induction!   "
},
{
  "id": "ssec_fundamentalTheoremOfArithmetic-6",
  "level": "2",
  "url": "sec-primesFactorization.html#ssec_fundamentalTheoremOfArithmetic-6",
  "type": "Proof",
  "number": "1.3.2.1",
  "title": "",
  "body": " It is enough to show that, if , we may write , where the 's are not necessarily distinct primes. Then we can collect the common primes and write them with exponent notation.  Note that when , there is such an expression, so let be the least positive integer that fails to be expressed as above. We note that cannot be prime, or it could be expressed as above. Thus, by Theorem 2.1, there is a prime such that , where . Since was the least positive integer that cannot be factored as a product of primes, has a prime factorization. But then so does , a contradiction.  "
},
{
  "id": "ssec_fundamentalTheoremOfArithmetic-7",
  "level": "2",
  "url": "sec-primesFactorization.html#ssec_fundamentalTheoremOfArithmetic-7",
  "type": "Lemma",
  "number": "1.3.8",
  "title": "",
  "body": "  Let and all be primes and let be a natural number such that . Then for some .   "
},
{
  "id": "ssec_fundamentalTheoremOfArithmetic-8",
  "level": "2",
  "url": "sec-primesFactorization.html#ssec_fundamentalTheoremOfArithmetic-8",
  "type": "Proof",
  "number": "1.3.2.2",
  "title": "",
  "body": " We first state a claim that will be useful.   Claim 1: If are primes such that , then .   Proof of Claim 1: Since and both and are prime, by the definition of primality.   Now assume that . If , we're done by Claim 1. If not, the definition of a prime guarantees that . If , we're done by Claim 1. Otherwise, .  Repeating this process, we see that either for some , or . Now the definition of a prime guarantees that or , in which case Claim 1 requires that or .  "
},
{
  "id": "theorem_FTAuniqueness",
  "level": "2",
  "url": "sec-primesFactorization.html#theorem_FTAuniqueness",
  "type": "Theorem",
  "number": "1.3.9",
  "title": "Fundamental Theorem of Arithmetic–Uniqueness Part.",
  "body": " Fundamental Theorem of Arithmetic Uniqueness Part   Let be a natural number. Let and be sets of primes with if and if . Let and be sets of natural numbers such that .  Then and . That is, the sets of primes are equal but their elements are not necessarily listed in the same order (i.e., may or may not equal ). Moreover, if , then . In other words, if we express the same natural number as a product of distinct primes, then the expressions are identical except for the ordering of the factors.    Argue that the two sets are equal (how do we do that?). Then argue that the exponents must also be equal.   "
},
{
  "id": "ssec_fundamentalTheoremOfArithmetic-10",
  "level": "2",
  "url": "sec-primesFactorization.html#ssec_fundamentalTheoremOfArithmetic-10",
  "type": "Proof",
  "number": "1.3.2.3",
  "title": "",
  "body": " Without loss of generality, assume and . Given a , we know that , which implies that for some by Claim 2 in the proof of Lemma 2.8. Further, Lemma 2.8 implies that , and similarly, given a , for some . Thus, , and by the ordering of the 's and 's, we have , . Therefore, .  Now, assume by way of contradiction, that for some . Without loss of generality, we may assume . Then , which implies that .  Since , we have that , from which for some by Lemma 2.8. This is a contradiction, so for .  "
},
{
  "id": "exer_primesFactorizationTF",
  "level": "2",
  "url": "sec-primesFactorization.html#exer_primesFactorizationTF",
  "type": "Exercise",
  "number": "1.3.3.1",
  "title": "",
  "body": " Mark the following as true or false.   Every even number is composite.  The sum of two prime numbers is prime.  The product of two prime numbers is prime.  Every odd number is composite.  If a prime divides the product of two integers, it must divide at least one of the integers.  Every composite number has at least two distinct prime factors.  The product of two compposite numbers is always composite.  There are infinitely many composite numbers.   "
},
{
  "id": "exers_primesFactorization-3",
  "level": "2",
  "url": "sec-primesFactorization.html#exers_primesFactorization-3",
  "type": "Exercise",
  "number": "1.3.3.2",
  "title": "",
  "body": " List the prime numbers between 50 and 100.  "
},
{
  "id": "exer-primes-factorization-factorizations",
  "level": "2",
  "url": "sec-primesFactorization.html#exer-primes-factorization-factorizations",
  "type": "Exercise",
  "number": "1.3.3.3",
  "title": "",
  "body": " Compute the prime factorization of:                "
},
{
  "id": "exer-primes-factorization-isprime",
  "level": "2",
  "url": "sec-primesFactorization.html#exer-primes-factorization-isprime",
  "type": "Exercise",
  "number": "1.3.3.4",
  "title": "",
  "body": " Determine if the following numbers are prime:                      "
},
{
  "id": "sec-divisibility-gcd-bezout-coeff",
  "level": "2",
  "url": "sec-primesFactorization.html#sec-divisibility-gcd-bezout-coeff",
  "type": "Exercise",
  "number": "1.3.3.5",
  "title": "",
  "body": " For each of the pairs of integers in find Bézout coefficients. That is, find such that .  "
},
{
  "id": "exers_primesFactorization-7",
  "level": "2",
  "url": "sec-primesFactorization.html#exers_primesFactorization-7",
  "type": "Exercise",
  "number": "1.3.3.6",
  "title": "",
  "body": " Another way of computing the gcd is to compute the prime factorizations of two numbers and seeing what they share. Use this method to compute .  "
},
{
  "id": "exers_primesFactorization-8",
  "level": "2",
  "url": "sec-primesFactorization.html#exers_primesFactorization-8",
  "type": "Exercise",
  "number": "1.3.3.7",
  "title": "",
  "body": " Find the prime factorization of 100!.  "
},
{
  "id": "exers_primesFactorization-9",
  "level": "2",
  "url": "sec-primesFactorization.html#exers_primesFactorization-9",
  "type": "Exercise",
  "number": "1.3.3.8",
  "title": "",
  "body": " Prove that there are infinitely many prime numbers.  "
},
{
  "id": "exers_primesFactorization-10",
  "level": "2",
  "url": "sec-primesFactorization.html#exers_primesFactorization-10",
  "type": "Exercise",
  "number": "1.3.3.9",
  "title": "",
  "body": " Suppose are such that . Prove .  "
},
{
  "id": "exers_primesFactorization-11",
  "level": "2",
  "url": "sec-primesFactorization.html#exers_primesFactorization-11",
  "type": "Exercise",
  "number": "1.3.3.10",
  "title": "",
  "body": " Suppose are such that . Prove that .  "
},
{
  "id": "exer_primes-factorization-primeDividingPower",
  "level": "2",
  "url": "sec-primesFactorization.html#exer_primes-factorization-primeDividingPower",
  "type": "Exercise",
  "number": "1.3.3.11",
  "title": "",
  "body": " Suppose is a prime number and is such that for some . Use the Fundamental Theorem of Arithmetic to prove . Show this is false if is not prime.  "
},
{
  "id": "exers_primesFactorization-13",
  "level": "2",
  "url": "sec-primesFactorization.html#exers_primesFactorization-13",
  "type": "Exercise",
  "number": "1.3.3.12",
  "title": "",
  "body": " Find the smallest natural number that has exactly 10 distinct prime factors.  "
},
{
  "id": "exers_primesFactorization-14",
  "level": "2",
  "url": "sec-primesFactorization.html#exers_primesFactorization-14",
  "type": "Exercise",
  "number": "1.3.3.13",
  "title": "",
  "body": " Using and matehmatical induction, prove that if is prime and for some , then . This is an alternate proof of .  "
},
{
  "id": "exers_primesFactorization-15",
  "level": "2",
  "url": "sec-primesFactorization.html#exers_primesFactorization-15",
  "type": "Exercise",
  "number": "1.3.3.14",
  "title": "",
  "body": " Show that if , then it is not necessarily true that . However, prove that if , then .  "
},
{
  "id": "sec_integersModuloM",
  "level": "1",
  "url": "sec_integersModuloM.html",
  "type": "Section",
  "number": "1.4",
  "title": "The Integers modulo <span class=\"process-math\">\\(m\\)<\/span>",
  "body": " The Integers modulo    In this section, we'll seek to answer the questions:    What are equivalence relations?  What is congruence modulo ?  How does arithmetic in compare to arithmetic in ?     The foundation for our exploration of abstract algebra is nearly complete. We need the basics of one more \"number system\" in order to appreciate the abstract approach developed in subsequent chapters. To build that number system, a brief review of relations and equivalence relations is required. We then go on to define an algebraic structure for each . This is a process we will revisit in ???Polynomial Rings??? and ???Noether Isomorphism Theorem???    Equivalence Relations  Recall that given sets and , the Cartesian product of with , denoted (\" cross \"), is the set of all possible ordered pairs whose first element is from and second element is from . Symbolically,      Relation   relation   Let be a nonempty set. A relation  on is a subset of . If such that , we usually write and say that and are related under . If is understand, we may simply write .    The notion of a relation as presented above is extremely open-ended. Any subset of ordered pairs of describes a relation on the set . Of course, some relations are more meaningful than others; the branch of mathematics known as order theory studies order relations (such as the familiar ). Our focus will be on equivalence relations , which isolate the important features of .   equivalence relation  equivalence class  equivalence class, representative of   Let be a nonempty set. We say a relation on is an equivalence relation if the following properties hold:    is reflexive : if , then .     is symmetric : if with , then .     is transitive : if with and , then .     Given , the set is called the equivalence class of . Any element is called a representative of the equivalence class.      Prove that has the same birthday as is an equivalence relation on the set of all people.    Given any , clearly has the same birthday as .  Moreover, if such that has the same birthday as , then it is clear that has the same birthday as .  Finally, if such that has the same birthday as and has the same birthday as , then must have the same birthday as .      What other relations can you think of? Write down one example and one non-example of an equivalence relation.      Prove that is not an equivalence relation on .    The relation fails the symmetry condition. As an example, note that , but .      Congruence Modulo  For our purposes, a particularly important equivalence relation is congruence modulo on the set of integers.   congruence modulo   Let and , . We say is congruent to modulo if . We write or we write as shorthand.      Justify the following congruences.                       Given an integer , congruence modulo is an equivalence relation on .    Let . Then , so . Thus, is reflexive.  Let such that . This means that , so there is some such that . Then , so and . Thus, is symmetric.  Finally, let such that and . Then and , so there are integers such that and . Summing these equations yields , so and .      Integers Modulo     Integers modulo      The set of equivalence classes of under the equivalence relation congruence modulo is called the integers modulo , and is denoted (pronounced \"Z mod m\").     List the elements of and .    The equivalence classes of are Since every integer is in one of the above equivalence classes, we know we have found them all.      Let and such that and . Then .    Write and for some . Then , so .      Let and such that and . Then .     Write and for some . Observe .  Thus, and .    well-defined statement   Let be a set and an equivalence relation on . Then a statement about the equivalence classes of is well-defined if the representative of the equivalence class does not matter. That is, whenever , .    The previous exercises justify the following definitions.   Notation  In some textbooks, the set of integers modulo is denoted by . However, this notation often conflicts both with the -adic integers and the usual notation for quotienting discussed in ???Quotient Rings???. As such, we've opted for the more standard notation of .     Let and . Then the following are well-defined operations on the equivalence classes:    Addition modulo : . The symbol is often used to indicate that we are defining the expression on the left to equal the expression on the right.      Multiplication modulo : .       Most elementary propositions about can be recast as statements about . For instance, in proving you likely proved that if and that . However, as the statements become more complex, repeatedly reshaping statements about as statements about becomes cumbersome and unhelpful. Instead, you are encouraged to become comfortable doing arithmetic modulo or, put another way, arithmetic with the equivalence classes of as defined in .    Without passing back to , find the smallest nonnegative integer representative of the resulting equivalence classes.   in  in  in  in  in    TBD     Addition and Multiplication Tables in  A useful tool for analyzing addition and multiplication in are addition and multiplication tables. As an example, consider the addition and multiplication tables for shown in and .   Addition table for                                                              Multiplication table for . >                                                              Calculate addition and multiplication tables for the following rings.          List 2-3 observations about your tables.    TBD.      Arithmetic Properties of  In the remainder of this section, we investigate fundamental properties of arithmetic in .    Let with and . If , is it true that ? If so, prove it. If not, find an example of when the statement fails to hold.    It is not true. For example, in , , but .      Let , and be integers with and . Then there is some such that .  Conclude that if in that .    We know that , i.e., that . By Theorem , .      Let be prime and such that . Then   there is some such that ; and,    if , .       In , every nonzero equivalence class is represented by an for which . Apply .      Exercises   Mark the following as true or false.   For any integer , modulo .  If modulo , then modulo .  If modulo and modulo , then modulo .  If modulo , then modulo .  If modulo , then .  If , then for any .     List the elements in and . Use the convention that conjugacy class representatives start with .    Carry out the modular arithmetic. That is, find the smallest nonnegative integer representative of the resulting equivalence class.    in    in    in    in    in      Write out the addition and multiplication tables for .    Write out the addition and multiplication tables for . What do you notice here that isn't true in ?    Prove that if and . Then there exists such that .    Suppose is prime. Use the previous problem to prove that if in , then there is such that . In other words, show that all non-zero elements in have a multiplicative inverse.    For each non-zero element in , determine its multiplicative inverse in the sense of the previous exercise.    Show that if is not prime, then it is possible that in but neither term is zero: . Such are called zero-divisors.    Show that the function defined by is not well-defined.    Prove that addition and multiplication is commutative in . That is:     Prove that addition and multiplication is associative in . That is:     Prove that and in .    Prove that for any there is such that .    "
},
{
  "id": "obj_integers-modulo-m",
  "level": "2",
  "url": "sec_integersModuloM.html#obj_integers-modulo-m",
  "type": "Guiding Questions",
  "number": "1.4",
  "title": "",
  "body": "  In this section, we'll seek to answer the questions:    What are equivalence relations?  What is congruence modulo ?  How does arithmetic in compare to arithmetic in ?   "
},
{
  "id": "ssec_equivalenceRelations-4",
  "level": "2",
  "url": "sec_integersModuloM.html#ssec_equivalenceRelations-4",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "   Relation   relation   Let be a nonempty set. A relation  on is a subset of . If such that , we usually write and say that and are related under . If is understand, we may simply write .   "
},
{
  "id": "def-eqrel",
  "level": "2",
  "url": "sec_integersModuloM.html#def-eqrel",
  "type": "Definition",
  "number": "1.4.2",
  "title": "",
  "body": " equivalence relation  equivalence class  equivalence class, representative of   Let be a nonempty set. We say a relation on is an equivalence relation if the following properties hold:    is reflexive : if , then .     is symmetric : if with , then .     is transitive : if with and , then .     Given , the set is called the equivalence class of . Any element is called a representative of the equivalence class.   "
},
{
  "id": "ssec_equivalenceRelations-7",
  "level": "2",
  "url": "sec_integersModuloM.html#ssec_equivalenceRelations-7",
  "type": "Activity",
  "number": "1.4.1",
  "title": "",
  "body": "  Prove that has the same birthday as is an equivalence relation on the set of all people.    Given any , clearly has the same birthday as .  Moreover, if such that has the same birthday as , then it is clear that has the same birthday as .  Finally, if such that has the same birthday as and has the same birthday as , then must have the same birthday as .   "
},
{
  "id": "ssec_equivalenceRelations-8",
  "level": "2",
  "url": "sec_integersModuloM.html#ssec_equivalenceRelations-8",
  "type": "Exploration",
  "number": "1.4.2",
  "title": "",
  "body": "  What other relations can you think of? Write down one example and one non-example of an equivalence relation.   "
},
{
  "id": "ssec_equivalenceRelations-9",
  "level": "2",
  "url": "sec_integersModuloM.html#ssec_equivalenceRelations-9",
  "type": "Activity",
  "number": "1.4.3",
  "title": "",
  "body": "  Prove that is not an equivalence relation on .    The relation fails the symmetry condition. As an example, note that , but .   "
},
{
  "id": "ssec_congruenceModm-3",
  "level": "2",
  "url": "sec_integersModuloM.html#ssec_congruenceModm-3",
  "type": "Definition",
  "number": "1.4.3",
  "title": "",
  "body": " congruence modulo   Let and , . We say is congruent to modulo if . We write or we write as shorthand.   "
},
{
  "id": "ssec_congruenceModm-4",
  "level": "2",
  "url": "sec_integersModuloM.html#ssec_congruenceModm-4",
  "type": "Activity",
  "number": "1.4.4",
  "title": "",
  "body": "  Justify the following congruences.                    "
},
{
  "id": "ssec_congruenceModm-5",
  "level": "2",
  "url": "sec_integersModuloM.html#ssec_congruenceModm-5",
  "type": "Theorem",
  "number": "1.4.4",
  "title": "",
  "body": "  Given an integer , congruence modulo is an equivalence relation on .    Let . Then , so . Thus, is reflexive.  Let such that . This means that , so there is some such that . Then , so and . Thus, is symmetric.  Finally, let such that and . Then and , so there are integers such that and . Summing these equations yields , so and .   "
},
{
  "id": "def_integersModm",
  "level": "2",
  "url": "sec_integersModuloM.html#def_integersModm",
  "type": "Definition",
  "number": "1.4.5",
  "title": "",
  "body": "   Integers modulo      The set of equivalence classes of under the equivalence relation congruence modulo is called the integers modulo , and is denoted (pronounced \"Z mod m\").  "
},
{
  "id": "ssec_integersModm-3",
  "level": "2",
  "url": "sec_integersModuloM.html#ssec_integersModm-3",
  "type": "Exploration",
  "number": "1.4.5",
  "title": "",
  "body": "  List the elements of and .    The equivalence classes of are Since every integer is in one of the above equivalence classes, we know we have found them all.   "
},
{
  "id": "thm-additionmodulom",
  "level": "2",
  "url": "sec_integersModuloM.html#thm-additionmodulom",
  "type": "Theorem",
  "number": "1.4.6",
  "title": "",
  "body": "  Let and such that and . Then .    Write and for some . Then , so .   "
},
{
  "id": "ssec_integersModm-5",
  "level": "2",
  "url": "sec_integersModuloM.html#ssec_integersModm-5",
  "type": "Theorem",
  "number": "1.4.7",
  "title": "",
  "body": "  Let and such that and . Then .   "
},
{
  "id": "ssec_integersModm-6",
  "level": "2",
  "url": "sec_integersModuloM.html#ssec_integersModm-6",
  "type": "Proof",
  "number": "1.4.3.1",
  "title": "",
  "body": " Write and for some . Observe .  Thus, and .  "
},
{
  "id": "def-well-defined",
  "level": "2",
  "url": "sec_integersModuloM.html#def-well-defined",
  "type": "Definition",
  "number": "1.4.8",
  "title": "",
  "body": " well-defined statement   Let be a set and an equivalence relation on . Then a statement about the equivalence classes of is well-defined if the representative of the equivalence class does not matter. That is, whenever , .   "
},
{
  "id": "def-arithemticmodm",
  "level": "2",
  "url": "sec_integersModuloM.html#def-arithemticmodm",
  "type": "Definition",
  "number": "1.4.9",
  "title": "",
  "body": "  Let and . Then the following are well-defined operations on the equivalence classes:    Addition modulo : . The symbol is often used to indicate that we are defining the expression on the left to equal the expression on the right.      Multiplication modulo : .      "
},
{
  "id": "ssec_integersModm-12",
  "level": "2",
  "url": "sec_integersModuloM.html#ssec_integersModm-12",
  "type": "Activity",
  "number": "1.4.6",
  "title": "",
  "body": "  Without passing back to , find the smallest nonnegative integer representative of the resulting equivalence classes.   in  in  in  in  in    TBD  "
},
{
  "id": "table-z3addition",
  "level": "2",
  "url": "sec_integersModuloM.html#table-z3addition",
  "type": "Table",
  "number": "1.4.10",
  "title": "Addition table for <span class=\"process-math\">\\(R=\\Z_3\\)<\/span>",
  "body": " Addition table for                                                            "
},
{
  "id": "table-z3multiplication",
  "level": "2",
  "url": "sec_integersModuloM.html#table-z3multiplication",
  "type": "Table",
  "number": "1.4.11",
  "title": "Multiplication table for <span class=\"process-math\">\\(\\Z\/3\\text{.}\\)<\/span>",
  "body": " Multiplication table for . >                                                           "
},
{
  "id": "invest-tables",
  "level": "2",
  "url": "sec_integersModuloM.html#invest-tables",
  "type": "Investigation",
  "number": "1.4.7",
  "title": "",
  "body": "  Calculate addition and multiplication tables for the following rings.          List 2-3 observations about your tables.    TBD.   "
},
{
  "id": "q_zmodmcancel",
  "level": "2",
  "url": "sec_integersModuloM.html#q_zmodmcancel",
  "type": "Investigation",
  "number": "1.4.8",
  "title": "",
  "body": "  Let with and . If , is it true that ? If so, prove it. If not, find an example of when the statement fails to hold.    It is not true. For example, in , , but .   "
},
{
  "id": "theorem_cancelrelprime",
  "level": "2",
  "url": "sec_integersModuloM.html#theorem_cancelrelprime",
  "type": "Theorem",
  "number": "1.4.12",
  "title": "",
  "body": "  Let , and be integers with and . Then there is some such that .  Conclude that if in that .    We know that , i.e., that . By Theorem , .   "
},
{
  "id": "theorem_cancelinZp",
  "level": "2",
  "url": "sec_integersModuloM.html#theorem_cancelinZp",
  "type": "Theorem",
  "number": "1.4.13",
  "title": "",
  "body": "  Let be prime and such that . Then   there is some such that ; and,    if , .       In , every nonzero equivalence class is represented by an for which . Apply .   "
},
{
  "id": "integers-mod-m-tf",
  "level": "2",
  "url": "sec_integersModuloM.html#integers-mod-m-tf",
  "type": "Exercise",
  "number": "1.4.6.1",
  "title": "",
  "body": " Mark the following as true or false.   For any integer , modulo .  If modulo , then modulo .  If modulo and modulo , then modulo .  If modulo , then modulo .  If modulo , then .  If , then for any .   "
},
{
  "id": "exers-integers-mod-m-3",
  "level": "2",
  "url": "sec_integersModuloM.html#exers-integers-mod-m-3",
  "type": "Exercise",
  "number": "1.4.6.2",
  "title": "",
  "body": " List the elements in and . Use the convention that conjugacy class representatives start with .  "
},
{
  "id": "exers-integers-mod-m-4",
  "level": "2",
  "url": "sec_integersModuloM.html#exers-integers-mod-m-4",
  "type": "Exercise",
  "number": "1.4.6.3",
  "title": "",
  "body": " Carry out the modular arithmetic. That is, find the smallest nonnegative integer representative of the resulting equivalence class.    in    in    in    in    in    "
},
{
  "id": "exers-integers-mod-m-5",
  "level": "2",
  "url": "sec_integersModuloM.html#exers-integers-mod-m-5",
  "type": "Exercise",
  "number": "1.4.6.4",
  "title": "",
  "body": " Write out the addition and multiplication tables for .  "
},
{
  "id": "exers-integers-mod-m-6",
  "level": "2",
  "url": "sec_integersModuloM.html#exers-integers-mod-m-6",
  "type": "Exercise",
  "number": "1.4.6.5",
  "title": "",
  "body": " Write out the addition and multiplication tables for . What do you notice here that isn't true in ?  "
},
{
  "id": "exers-integers-mod-m-7",
  "level": "2",
  "url": "sec_integersModuloM.html#exers-integers-mod-m-7",
  "type": "Exercise",
  "number": "1.4.6.6",
  "title": "",
  "body": " Prove that if and . Then there exists such that .  "
},
{
  "id": "exers-integers-mod-m-8",
  "level": "2",
  "url": "sec_integersModuloM.html#exers-integers-mod-m-8",
  "type": "Exercise",
  "number": "1.4.6.7",
  "title": "",
  "body": " Suppose is prime. Use the previous problem to prove that if in , then there is such that . In other words, show that all non-zero elements in have a multiplicative inverse.  "
},
{
  "id": "exers-integers-mod-m-9",
  "level": "2",
  "url": "sec_integersModuloM.html#exers-integers-mod-m-9",
  "type": "Exercise",
  "number": "1.4.6.8",
  "title": "",
  "body": " For each non-zero element in , determine its multiplicative inverse in the sense of the previous exercise.  "
},
{
  "id": "exers-integers-mod-m-10",
  "level": "2",
  "url": "sec_integersModuloM.html#exers-integers-mod-m-10",
  "type": "Exercise",
  "number": "1.4.6.9",
  "title": "",
  "body": " Show that if is not prime, then it is possible that in but neither term is zero: . Such are called zero-divisors.  "
},
{
  "id": "exers-integers-mod-m-11",
  "level": "2",
  "url": "sec_integersModuloM.html#exers-integers-mod-m-11",
  "type": "Exercise",
  "number": "1.4.6.10",
  "title": "",
  "body": " Show that the function defined by is not well-defined.  "
},
{
  "id": "exers-integers-mod-m-12",
  "level": "2",
  "url": "sec_integersModuloM.html#exers-integers-mod-m-12",
  "type": "Exercise",
  "number": "1.4.6.11",
  "title": "",
  "body": " Prove that addition and multiplication is commutative in . That is:   "
},
{
  "id": "exers-integers-mod-m-13",
  "level": "2",
  "url": "sec_integersModuloM.html#exers-integers-mod-m-13",
  "type": "Exercise",
  "number": "1.4.6.12",
  "title": "",
  "body": " Prove that addition and multiplication is associative in . That is:   "
},
{
  "id": "exers-integers-mod-m-14",
  "level": "2",
  "url": "sec_integersModuloM.html#exers-integers-mod-m-14",
  "type": "Exercise",
  "number": "1.4.6.13",
  "title": "",
  "body": " Prove that and in .  "
},
{
  "id": "exers-integers-mod-m-15",
  "level": "2",
  "url": "sec_integersModuloM.html#exers-integers-mod-m-15",
  "type": "Exercise",
  "number": "1.4.6.14",
  "title": "",
  "body": " Prove that for any there is such that .  "
},
{
  "id": "sec_fields",
  "level": "1",
  "url": "sec_fields.html",
  "type": "Section",
  "number": "2.1",
  "title": "Fields",
  "body": " Fields    In this section, we'll seek to answer the questions:    What are binary operations?  What is a field? What sorts of things can one do in a field?  What are examples of fields?     Number Systems  We now begin the process of abstraction. We will do this in stages, beginning with the concept of a field . First, we need to formally define some familiar sets of numbers.     Rational Numbers   Rational Numbers   The rational numbers , denoted by , is the set . The symbol is is a fraction and we regard two symbols as defining the same element if and only if .      Prove that the relation defined in is an equivalence relation. Recall .      For , the sum and product: is well-defined.    We only show the product is well-defined, while the sum is left as an exercise. To be well-defined, we need to argue that for any equivalent ways of representing both fractions in the product, the result is unchanged. To that end, take . Suppose that and .  Then and we need to show that is equivalent to or that .  We have as desired.     real numbers We likely have an intuitive idea of what is meant by , the set of real numbers. Defining rigorously is actually quite difficult, and occupies a significant amount of time in a first course in real analysis. Thus, we will make use of your intuition.  It is worth noting that , but also contains many irrational numbers, such as , , , and so on.  Out of we may build the complex numbers.     Complex Numbers   Complex Numbers   The complex numbers consist of all expressions of the form , where and . Given , we say is the real part of and is the imaginary part . The set of complex numbers is denoted .  Addition and multiplication in is defined in the usual way:     Unlike , the elements of are not equivalence classes and so we do not need an analogue of here.    Binary Operations   Algebra comes from an Arabic word meaning the reunion of broken parts . We therefore need a way of combining two elements of a set into one; we turn to a particular type of function, known as a binary operation, to accomplish this.   Binary Operation  Closure   Let be a nonempty set. A function is called a binary operation . If is a binary operation on , we say that is closed under the operation . [Given , we usually write in place of the typical function notation, .]      Which of are binary operations:   on ?    on ?    on ?    on ?    on ? (Recall that for , and .)       Division is never a binary operation. The others are binary operations on , , and . The only binary operation on is addition.      Choose your favorite nonempty set and describe a binary operation different than those in .    Answers vary, but one option is to define by       Fields  The hallmark of modern pure mathematics is the use of axioms . An axiom is essentially an unproved assertion of truth. Our use of axioms serves several purposes.  From a logical perspective, axioms help us avoid the problem of infinite regression (e.g., asking How do you know? over and over again). That is, axioms give us very clear starting points from which to make our deductions.   To that end, our first abstract algebraic structure captures and axiomatizes familiar behavior about how numbers can be combined to produce other numbers of the same type.   Heinrich Martin Weber     Portrait of Heinrich Martin Weber   The first whispers of a field were known to Lagrange in 1770. However, it was not until 1893 that a formal definition of an abstract field was given. This definition is due to Heinrich Martin Weber in the paper Die allgemeinen Grundlagen der Galois'schen Gleichungstheorie . Weber was a German mathematician known for contributions to the fields of algebra, number theory, and analysis.    field   A field is a nonempty set with at least two elements and binary operations and , denoted , and satisfying the following field axioms :   Given any , . (Associativity of addition)    Given any , . (Commutativity of addition)    There exists an element such that for all , . (Additive identity)    Given any there exists a such that . (Additive inverse)    Given any , . (Associativity of multiplication)    Given any , . (Commutativity of multiplication)    There exists an element such that for all , . (Multiplicative identity)    For all , , there exists a such that . (Multiplicative inverse)    For all , . (Distributive property I)    For all , . (Distributive property II)       We will usually write as . Additionally, we will usually drop the subscripts on unless we need to distinguish between fundamentally different identities in different fields.    Which of the following are fields under the specified operations? For most, a short justification or counterexample is sufficient.    under the usual addition and multiplication operations     under the usual addition and multiplication operations     , the set of even integers, under the usual addition and multiplication operations     under the usual addition and multiplication operations defined in     under addition and multiplication modulo 6     under addition and multiplication modulo 5     under the usual addition and multiplication operations     under the complex addition and multiplication defined in      For students who have taken a linear algebra course. , the set of matrices with real coefficients using the usual definition of matrix multiplication Recall that, if , then . and matrix addition.           is not closed under taking additive inverses, so is not a field.     is not a field, as there is no integer such that .     is not a field for the same reason.     is a field.     is not a field; there is no for which (you can check them all; there are only 4 viable options).      is a field. The axioms pertaining to addition and multiplication were established earlier or rely on the same axioms holding for .     is a field     is a field. Given , .     is not a field. Matrix multiplication is not commutative.       In the , you determined which of sets of familiar mathematical objects are and are not fields. Notice that you have been working with fields for years and that our abstraction of language to that of fields is simply to allow us to explore the common features at the same time - it is inefficient to prove the same statement about every single field when we can prove it once and for all about fields in general.    Examples of Fields  We will now provide more rigorous arguments that the fields investigated are in fact fields. We will do so by checking, for a handful of the fields investigated, each of the axioms hold. At the end of the section we will introduce a way of simplyfying some of our work.   Rational Numbers are a Field   Having already shown that addition and multiplication are well-defined in . We show that, equipped with these binary operations, forms a field. Take .  We start with the additive checks: associativity, commutativity, additive identity, and additive inverses. For associativity we have: where we have dropped the parentheses in the numerator as multiplication in is associative. We also have and this is the same as the other association.  For commutativity we have: But in we know that and .  The element is the additive identity as .  The additive inverse of is as: And as .  We now turn to the multiplicative axioms: associativity, commutativity, identity, inverses of non-zero elements. For associativity: where the last line uses associativity of multiplication in .  For commutativity we again use that the property holds in :   The multiplicative identity is as   Lastly we have the left and right-distributive axioms. For the left-distributive axiom we have: Now notice that as   It is a consequence of the axioms that left and right-distributivity are equivalent, see . We show how to prove this exercise in this example: where the first and third equality is commutativity of multiplication and the second is the left-distributive property.    This was quite involved but we managed it. This was our first check that a set with one or more binary operations satisfied a sequence of axioms. These types of checks will continue throughout the course and so we will spend quite some time developing procedural fluency in carrying out definition checks.   Complex Numbers Form a Field   The Complex Numbers form a field under their usual multiplication and addition. The operations are well-defined and so now we need to check all ten axioms. We leave a handful of them to the reader as they are not necessarily difficult but they are tedious. Take .  We leave the proof of associativity as an exercise, as well as the proof that the additive identity is and the additive inverse of is . We will prove that addition is commutative: as and addition of real numbers is commutative.  We leave the proof of associativity as a worthy yet tedious exercise. We will prove the remaining axioms. For commutativity: where have used the multiplication of real numbers is commutative.  The multiplicative identity is :   The multiplicative inverse of a non-zero is . Since , and so this complex number is well-defined. We leave it as an exercise to verify:   We've already seen an instance of the left-distributive property implying the right-distributive property. Since you will prove this in Exer???? we only show the left-distributive property: and These agree and completes the proof of the left-distributive property and that is a field.    The next example is a finite example. In particular, we will return to and prove that the integers modulo form a field if and only if is prime.  Before the proof, we recall that addition and multiplication is associative and commutative was done in exercises ????. The additive identity is as . The additive inverse of is . The multiplicative identity is as . That multiplication distributes over addition was also done in exercise???.  In particular, satisfies all the axioms of being a field with the exception of multiplicative inverses for non-zero elements. In the proof that follows we show this happens if and only if is prime.    Fix in . Then , with modular addition and multiplication, is a field if and only if is prime.    By the discussion preceeding the theorem statement, we need only check that multiplicative inverses exist to see that is a field. To that end, suppose is prime. Take . Since is prime, . If , then which isn't true. Thus . By , there exists with   Since , after reducing modulo we have and in particular is the multiplicative inverse of .  If is not prime, then there exists with and . Then . And since , we have . If was a field, then has a multiplicative inverse, say . Then which contradicts . We conclude the non-zero element does not have a multiplicative inverse and so when is not prime is not a field.    Notice that when is prime is a field and it has only finitely many elements. This is such an important field, we will give a proper definition.     Finite Field of Order    For a prime, we denote by the finite field and call it the finite field of order  .    The symbol means the same as in terms of field arithmetic. The notation is often used to emphasize that we are thinking about as a field.    Properties of Fields   Properties of Fields   Let be a field.   The additive identity is unique.    For all , .    Additive inverses are unique.    The multiplicative identity is unique.    Multiplicative inverses are unique.       Note that we are saying that the additive inverse of the multiplicative identity times itself equals the multiplicative identity. You should use only the field axioms and the properties previously established in this theorem.   Minus times Minus equals Plus: The reason for this we need not discuss. -W.H. Auden           Assume both satisfy the additive identity axiom. Observe that .    As , we may write . Now add the additive inverse of to both sides to obtain .    Let and suppose and are such that and . Then , and we may add (or ) to both sides to obtain and . Thus .    Suppose and are multiplicative identities. Then .    Let be nonzero and suppose are multiplicative inverses for . Then , and we may multiply by (or ) to obtain .    Observe that by the definition of additive inverses. Multiply both sides by and distribute to obtain . By part 2 of this theorem and the definition of a multiplicative identity, we obtain . We now add the multiplicative identity to obtain , which simplifies to .     One consequence of is that, given , , we may refer to as the additive inverse of , and as the multiplicative inverse of . We will thus employ this familiar terminology henceforth. Moreover, we will define subtraction in a field as and division as .    Subfields and Extensions  One source for new fields is to look within the fields we already have. That is, we want to know when a subset of a field is a field in its own right.    subfield    field extension    Let be a field. If is a nonempty subset satisfying   and   is a field under the same operations as ,    then we call a subfield of , and an extension field of , and say is a field extension .    Many of the number sets with which you are familiar are fields.   The set of complex numbers is an extension field of . Equivalently, is a subfield of     The last theorem in this section gives us a technique for identifying subfields of a given field.   Subfield Test   Let be a field and be a subset of such that:        For any , we have . (Closed under subtraction)    For any , we have . (Closed under division)   Then is a field under the addition and multiplication in . In particular, is a subfield of .     We check all of the axioms in . Since is closed under subtraction, . Since and is closed under subtraction, we have for any . Thus is closed under additive inverses. Since is closed under additive inverses and subtraction we have for any . Thus is closed under addition.  We now turn to the associativity and commutative properties. For any we know . Since addition in is associative, we know . Thus addition in is associative. We say it is inherited from . Similarly addition in is commutative, is the additive identity, multiplication is associative and commutative, is the multiplicative identity, and the distributive laws hold.  Lastly, since is closed under division and , for any we have and so the multiplicative inverse of is in . Thus is closed under taking multiplicative inverses. This completes the checks of each of the 10 axioms.   We end this section with another interesting example of a field. We also illustrate how to use the Subfield Test.   Adjoining to the Rationals   Define the set of rationals adjoin  by: This is a subset of . We claim that is a subfield of   We apply the . In particular, and the latter is a field. We first show that but this is just the element .  We now show closure under subtraction. Take , then Since , we conclude that is closed under subtraction.  We now show closure under division. Suppose . Writing , we know that which we can recombine the and : Note that would say which is absurd so the inverse is well-defined.  Now we divide: and since is a field it is closed under arithmetic. In particular . Thus is closed under division.  We conclude, by the Subfield Test, that is a subfield of .    The reader should take note that the importance of using under the radical was only that . In particular, for any such that the proof will go through exactly the same. You will carry this out in Exercise????    Exercises   Mark the following as true or false.   In a field, every element has a multiplicative inverse.  is a field.  is a field.  In a field, every non-zero element has a multiplicative inverse.  In a field, the additive identity is also the multiplicative identity.  In a field, the distributive laws hold.  In a field, addition is commutative.  TIn a field, multiplication is commutative.  is a field with the usual operations of addition and multiplication.  is a field with the usual operations of addition and multiplication.  is a field with the usual operations of addition and multiplication.  is a field with the usual operations of addition and multiplication.     Consider the set where and addition and multiplication are defined in the usual way:     Prove is a field only using .  Prove is a field using the .      Consider the set Prove that \\(L\\) is a field with the usual addition and multiplication of matrices.   Prove that \\(L\\) is a field with the usual addition and multiplication of matrices.  Is there an element such that (the identity matrix)? That is, can you solve the equation in ?     Prove that in a field, the additive identity is unique.    Prove that in a field, the multiplicative identity is unique.    Prove that in a field, the product of the additive identity and any element is . Does your proof handle the edge case ?    Prove that if additive and multiplicative axioms of a field hold, then the left distributive law: holds if and only if the right distributive law: holds.   Cancellation Law for Fields  Prove that the cancellation law holds in a field: If and , then .    Let Define an addition and multiplication by     List all of the elements of . Keep in mind .    Compute the addition and multiplication tables for .    Show that is a field.    We often write for this field. Explain why we might do that.       Rationals Adjoin  Quadratic Extensions of  Suppose that is such that . Define the rationals adjoin by where addition and multiplication are defined by     Prove is a field. You may appeal to as in .    Show that has as a subfield or equivalently that is an extension of . This type of extension is called a quadratic extension .      "
},
{
  "id": "obj_fields",
  "level": "2",
  "url": "sec_fields.html#obj_fields",
  "type": "Guiding Questions",
  "number": "2.1",
  "title": "",
  "body": "  In this section, we'll seek to answer the questions:    What are binary operations?  What is a field? What sorts of things can one do in a field?  What are examples of fields?   "
},
{
  "id": "def_rationalNumbers",
  "level": "2",
  "url": "sec_fields.html#def_rationalNumbers",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "   Rational Numbers   Rational Numbers   The rational numbers , denoted by , is the set . The symbol is is a fraction and we regard two symbols as defining the same element if and only if .   "
},
{
  "id": "subsec-numberSystems-4",
  "level": "2",
  "url": "sec_fields.html#subsec-numberSystems-4",
  "type": "Activity",
  "number": "2.1.1",
  "title": "",
  "body": "  Prove that the relation defined in is an equivalence relation. Recall .   "
},
{
  "id": "prop_arithmeticInQ",
  "level": "2",
  "url": "sec_fields.html#prop_arithmeticInQ",
  "type": "Proposition",
  "number": "2.1.2",
  "title": "",
  "body": "  For , the sum and product: is well-defined.    We only show the product is well-defined, while the sum is left as an exercise. To be well-defined, we need to argue that for any equivalent ways of representing both fractions in the product, the result is unchanged. To that end, take . Suppose that and .  Then and we need to show that is equivalent to or that .  We have as desired.   "
},
{
  "id": "def_complexNumbers",
  "level": "2",
  "url": "sec_fields.html#def_complexNumbers",
  "type": "Definition",
  "number": "2.1.3",
  "title": "",
  "body": "   Complex Numbers   Complex Numbers   The complex numbers consist of all expressions of the form , where and . Given , we say is the real part of and is the imaginary part . The set of complex numbers is denoted .  Addition and multiplication in is defined in the usual way:    "
},
{
  "id": "def_binaryOperation",
  "level": "2",
  "url": "sec_fields.html#def_binaryOperation",
  "type": "Definition",
  "number": "2.1.4",
  "title": "",
  "body": " Binary Operation  Closure   Let be a nonempty set. A function is called a binary operation . If is a binary operation on , we say that is closed under the operation . [Given , we usually write in place of the typical function notation, .]   "
},
{
  "id": "invest-binop",
  "level": "2",
  "url": "sec_fields.html#invest-binop",
  "type": "Investigation",
  "number": "2.1.2",
  "title": "",
  "body": "  Which of are binary operations:   on ?    on ?    on ?    on ?    on ? (Recall that for , and .)       Division is never a binary operation. The others are binary operations on , , and . The only binary operation on is addition.   "
},
{
  "id": "ssec_binaryOperations-5",
  "level": "2",
  "url": "sec_fields.html#ssec_binaryOperations-5",
  "type": "Activity",
  "number": "2.1.3",
  "title": "",
  "body": "  Choose your favorite nonempty set and describe a binary operation different than those in .    Answers vary, but one option is to define by    "
},
{
  "id": "ssec_fields-5-2-1",
  "level": "2",
  "url": "sec_fields.html#ssec_fields-5-2-1",
  "type": "Figure",
  "number": "2.1.5",
  "title": "",
  "body": "  Portrait of Heinrich Martin Weber   "
},
{
  "id": "def_field",
  "level": "2",
  "url": "sec_fields.html#def_field",
  "type": "Definition",
  "number": "2.1.6",
  "title": "",
  "body": " field   A field is a nonempty set with at least two elements and binary operations and , denoted , and satisfying the following field axioms :   Given any , . (Associativity of addition)    Given any , . (Commutativity of addition)    There exists an element such that for all , . (Additive identity)    Given any there exists a such that . (Additive inverse)    Given any , . (Associativity of multiplication)    Given any , . (Commutativity of multiplication)    There exists an element such that for all , . (Multiplicative identity)    For all , , there exists a such that . (Multiplicative inverse)    For all , . (Distributive property I)    For all , . (Distributive property II)      "
},
{
  "id": "exer_fieldexamples",
  "level": "2",
  "url": "sec_fields.html#exer_fieldexamples",
  "type": "Investigation",
  "number": "2.1.4",
  "title": "",
  "body": "  Which of the following are fields under the specified operations? For most, a short justification or counterexample is sufficient.    under the usual addition and multiplication operations     under the usual addition and multiplication operations     , the set of even integers, under the usual addition and multiplication operations     under the usual addition and multiplication operations defined in     under addition and multiplication modulo 6     under addition and multiplication modulo 5     under the usual addition and multiplication operations     under the complex addition and multiplication defined in      For students who have taken a linear algebra course. , the set of matrices with real coefficients using the usual definition of matrix multiplication Recall that, if , then . and matrix addition.           is not closed under taking additive inverses, so is not a field.     is not a field, as there is no integer such that .     is not a field for the same reason.     is a field.     is not a field; there is no for which (you can check them all; there are only 4 viable options).      is a field. The axioms pertaining to addition and multiplication were established earlier or rely on the same axioms holding for .     is a field     is a field. Given , .     is not a field. Matrix multiplication is not commutative.      "
},
{
  "id": "ssec_examplesOfFields-3",
  "level": "2",
  "url": "sec_fields.html#ssec_examplesOfFields-3",
  "type": "Example",
  "number": "2.1.7",
  "title": "Rational Numbers are a Field.",
  "body": " Rational Numbers are a Field   Having already shown that addition and multiplication are well-defined in . We show that, equipped with these binary operations, forms a field. Take .  We start with the additive checks: associativity, commutativity, additive identity, and additive inverses. For associativity we have: where we have dropped the parentheses in the numerator as multiplication in is associative. We also have and this is the same as the other association.  For commutativity we have: But in we know that and .  The element is the additive identity as .  The additive inverse of is as: And as .  We now turn to the multiplicative axioms: associativity, commutativity, identity, inverses of non-zero elements. For associativity: where the last line uses associativity of multiplication in .  For commutativity we again use that the property holds in :   The multiplicative identity is as   Lastly we have the left and right-distributive axioms. For the left-distributive axiom we have: Now notice that as   It is a consequence of the axioms that left and right-distributivity are equivalent, see . We show how to prove this exercise in this example: where the first and third equality is commutativity of multiplication and the second is the left-distributive property.   "
},
{
  "id": "ssec_examplesOfFields-5",
  "level": "2",
  "url": "sec_fields.html#ssec_examplesOfFields-5",
  "type": "Example",
  "number": "2.1.8",
  "title": "Complex Numbers Form a Field.",
  "body": " Complex Numbers Form a Field   The Complex Numbers form a field under their usual multiplication and addition. The operations are well-defined and so now we need to check all ten axioms. We leave a handful of them to the reader as they are not necessarily difficult but they are tedious. Take .  We leave the proof of associativity as an exercise, as well as the proof that the additive identity is and the additive inverse of is . We will prove that addition is commutative: as and addition of real numbers is commutative.  We leave the proof of associativity as a worthy yet tedious exercise. We will prove the remaining axioms. For commutativity: where have used the multiplication of real numbers is commutative.  The multiplicative identity is :   The multiplicative inverse of a non-zero is . Since , and so this complex number is well-defined. We leave it as an exercise to verify:   We've already seen an instance of the left-distributive property implying the right-distributive property. Since you will prove this in Exer???? we only show the left-distributive property: and These agree and completes the proof of the left-distributive property and that is a field.   "
},
{
  "id": "thm-integersModmField",
  "level": "2",
  "url": "sec_fields.html#thm-integersModmField",
  "type": "Theorem",
  "number": "2.1.9",
  "title": "",
  "body": "  Fix in . Then , with modular addition and multiplication, is a field if and only if is prime.    By the discussion preceeding the theorem statement, we need only check that multiplicative inverses exist to see that is a field. To that end, suppose is prime. Take . Since is prime, . If , then which isn't true. Thus . By , there exists with   Since , after reducing modulo we have and in particular is the multiplicative inverse of .  If is not prime, then there exists with and . Then . And since , we have . If was a field, then has a multiplicative inverse, say . Then which contradicts . We conclude the non-zero element does not have a multiplicative inverse and so when is not prime is not a field.   "
},
{
  "id": "def_Fp",
  "level": "2",
  "url": "sec_fields.html#def_Fp",
  "type": "Definition",
  "number": "2.1.10",
  "title": "",
  "body": "   Finite Field of Order    For a prime, we denote by the finite field and call it the finite field of order  .   "
},
{
  "id": "thm_fieldproperties",
  "level": "2",
  "url": "sec_fields.html#thm_fieldproperties",
  "type": "Theorem",
  "number": "2.1.11",
  "title": "Properties of Fields.",
  "body": " Properties of Fields   Let be a field.   The additive identity is unique.    For all , .    Additive inverses are unique.    The multiplicative identity is unique.    Multiplicative inverses are unique.       Note that we are saying that the additive inverse of the multiplicative identity times itself equals the multiplicative identity. You should use only the field axioms and the properties previously established in this theorem.   Minus times Minus equals Plus: The reason for this we need not discuss. -W.H. Auden       "
},
{
  "id": "subsec-propertiesOfFields-3",
  "level": "2",
  "url": "sec_fields.html#subsec-propertiesOfFields-3",
  "type": "Proof",
  "number": "2.1.5.1",
  "title": "",
  "body": "   Assume both satisfy the additive identity axiom. Observe that .    As , we may write . Now add the additive inverse of to both sides to obtain .    Let and suppose and are such that and . Then , and we may add (or ) to both sides to obtain and . Thus .    Suppose and are multiplicative identities. Then .    Let be nonzero and suppose are multiplicative inverses for . Then , and we may multiply by (or ) to obtain .    Observe that by the definition of additive inverses. Multiply both sides by and distribute to obtain . By part 2 of this theorem and the definition of a multiplicative identity, we obtain . We now add the multiplicative identity to obtain , which simplifies to .    "
},
{
  "id": "subsec-propertiesOfFields-4",
  "level": "2",
  "url": "sec_fields.html#subsec-propertiesOfFields-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subtraction "
},
{
  "id": "subsec-subfieldsAndExtensions-3",
  "level": "2",
  "url": "sec_fields.html#subsec-subfieldsAndExtensions-3",
  "type": "Definition",
  "number": "2.1.12",
  "title": "",
  "body": "  subfield    field extension    Let be a field. If is a nonempty subset satisfying   and   is a field under the same operations as ,    then we call a subfield of , and an extension field of , and say is a field extension .    "
},
{
  "id": "subsec-subfieldsAndExtensions-4",
  "level": "2",
  "url": "sec_fields.html#subsec-subfieldsAndExtensions-4",
  "type": "Theorem",
  "number": "2.1.13",
  "title": "",
  "body": "  The set of complex numbers is an extension field of . Equivalently, is a subfield of    "
},
{
  "id": "thm_subfieldTest",
  "level": "2",
  "url": "sec_fields.html#thm_subfieldTest",
  "type": "Theorem",
  "number": "2.1.14",
  "title": "Subfield Test.",
  "body": " Subfield Test   Let be a field and be a subset of such that:        For any , we have . (Closed under subtraction)    For any , we have . (Closed under division)   Then is a field under the addition and multiplication in . In particular, is a subfield of .   "
},
{
  "id": "subsec-subfieldsAndExtensions-7",
  "level": "2",
  "url": "sec_fields.html#subsec-subfieldsAndExtensions-7",
  "type": "Proof",
  "number": "2.1.6.1",
  "title": "",
  "body": " We check all of the axioms in . Since is closed under subtraction, . Since and is closed under subtraction, we have for any . Thus is closed under additive inverses. Since is closed under additive inverses and subtraction we have for any . Thus is closed under addition.  We now turn to the associativity and commutative properties. For any we know . Since addition in is associative, we know . Thus addition in is associative. We say it is inherited from . Similarly addition in is commutative, is the additive identity, multiplication is associative and commutative, is the multiplicative identity, and the distributive laws hold.  Lastly, since is closed under division and , for any we have and so the multiplicative inverse of is in . Thus is closed under taking multiplicative inverses. This completes the checks of each of the 10 axioms.  "
},
{
  "id": "ex_qAdjoinNegative5",
  "level": "2",
  "url": "sec_fields.html#ex_qAdjoinNegative5",
  "type": "Example",
  "number": "2.1.15",
  "title": "Adjoining <span class=\"process-math\">\\(\\sqrt{-5}\\)<\/span> to the Rationals.",
  "body": " Adjoining to the Rationals   Define the set of rationals adjoin  by: This is a subset of . We claim that is a subfield of   We apply the . In particular, and the latter is a field. We first show that but this is just the element .  We now show closure under subtraction. Take , then Since , we conclude that is closed under subtraction.  We now show closure under division. Suppose . Writing , we know that which we can recombine the and : Note that would say which is absurd so the inverse is well-defined.  Now we divide: and since is a field it is closed under arithmetic. In particular . Thus is closed under division.  We conclude, by the Subfield Test, that is a subfield of .   "
},
{
  "id": "exer_primesFactorizationTF",
  "level": "2",
  "url": "sec_fields.html#exer_primesFactorizationTF",
  "type": "Exercise",
  "number": "2.1.7.1",
  "title": "",
  "body": " Mark the following as true or false.   In a field, every element has a multiplicative inverse.  is a field.  is a field.  In a field, every non-zero element has a multiplicative inverse.  In a field, the additive identity is also the multiplicative identity.  In a field, the distributive laws hold.  In a field, addition is commutative.  TIn a field, multiplication is commutative.  is a field with the usual operations of addition and multiplication.  is a field with the usual operations of addition and multiplication.  is a field with the usual operations of addition and multiplication.  is a field with the usual operations of addition and multiplication.   "
},
{
  "id": "exers_primesFactorization-3",
  "level": "2",
  "url": "sec_fields.html#exers_primesFactorization-3",
  "type": "Exercise",
  "number": "2.1.7.2",
  "title": "",
  "body": " Consider the set where and addition and multiplication are defined in the usual way:     Prove is a field only using .  Prove is a field using the .    "
},
{
  "id": "exer_complexNumbersAsMatrices",
  "level": "2",
  "url": "sec_fields.html#exer_complexNumbersAsMatrices",
  "type": "Exercise",
  "number": "2.1.7.3",
  "title": "",
  "body": " Consider the set Prove that \\(L\\) is a field with the usual addition and multiplication of matrices.   Prove that \\(L\\) is a field with the usual addition and multiplication of matrices.  Is there an element such that (the identity matrix)? That is, can you solve the equation in ?   "
},
{
  "id": "exers_primesFactorization-5",
  "level": "2",
  "url": "sec_fields.html#exers_primesFactorization-5",
  "type": "Exercise",
  "number": "2.1.7.4",
  "title": "",
  "body": " Prove that in a field, the additive identity is unique.  "
},
{
  "id": "exers_primesFactorization-6",
  "level": "2",
  "url": "sec_fields.html#exers_primesFactorization-6",
  "type": "Exercise",
  "number": "2.1.7.5",
  "title": "",
  "body": " Prove that in a field, the multiplicative identity is unique.  "
},
{
  "id": "exers_primesFactorization-7",
  "level": "2",
  "url": "sec_fields.html#exers_primesFactorization-7",
  "type": "Exercise",
  "number": "2.1.7.6",
  "title": "",
  "body": " Prove that in a field, the product of the additive identity and any element is . Does your proof handle the edge case ?  "
},
{
  "id": "exer_leftDistributiveIFFRightDistributive",
  "level": "2",
  "url": "sec_fields.html#exer_leftDistributiveIFFRightDistributive",
  "type": "Exercise",
  "number": "2.1.7.7",
  "title": "",
  "body": " Prove that if additive and multiplicative axioms of a field hold, then the left distributive law: holds if and only if the right distributive law: holds.  "
},
{
  "id": "exers_primesFactorization-9",
  "level": "2",
  "url": "sec_fields.html#exers_primesFactorization-9",
  "type": "Exercise",
  "number": "2.1.7.8",
  "title": "Cancellation Law for Fields.",
  "body": "Cancellation Law for Fields  Prove that the cancellation law holds in a field: If and , then .  "
},
{
  "id": "exers_primesFactorization-10",
  "level": "2",
  "url": "sec_fields.html#exers_primesFactorization-10",
  "type": "Exercise",
  "number": "2.1.7.9",
  "title": "",
  "body": " Let Define an addition and multiplication by     List all of the elements of . Keep in mind .    Compute the addition and multiplication tables for .    Show that is a field.    We often write for this field. Explain why we might do that.    "
},
{
  "id": "exers_primesFactorization-11",
  "level": "2",
  "url": "sec_fields.html#exers_primesFactorization-11",
  "type": "Exercise",
  "number": "2.1.7.10",
  "title": "",
  "body": "  Rationals Adjoin  Quadratic Extensions of  Suppose that is such that . Define the rationals adjoin by where addition and multiplication are defined by     Prove is a field. You may appeal to as in .    Show that has as a subfield or equivalently that is an extension of . This type of extension is called a quadratic extension .    "
},
{
  "id": "sec_rings",
  "level": "1",
  "url": "sec_rings.html",
  "type": "Section",
  "number": "2.2",
  "title": "Rings",
  "body": " Rings   Guiding Questions   In this section, we'll seek to answer the questions:    What are rings and how do they relate to fields?  What are subrings, and how can we tell if a given subset of a ring is a subring?     In the previous section, we observed that many familiar number systems are fields but that some are not. As we will see, these non-fields are often more structurally interesting, at least from the perspective of factorization. In this section, we explore them in more detail. We start that exploration with a rigorous definition of polynomials and their arithmetic operations.    Integral Polynomials    A polynomial in with coefficients in is an expression of the form , where and . We will sometimes omit the function notation and denote simply by . We call the degree of the polynomial , denoted , and the coefficients of the polynomial. The coefficient is known as the leading coefficient of , and is the leading term of . The set of all integral polynomials is: Lastly, two polynomials are equal if and only if they have the same coefficients.    We know from our experience with polynomials in calculus and other courses that when we add two polynomials we again get a polynomial. Also when we multiply two polynomials we again get a polynomial. However, in order to show that addition and multiplication are well-defined operations on , they must first be defined!  This is easier said than done. Let's remind ourselves with an example that addition of polynomials is combine like terms . For example: Let's do this computation slightly differently: Notice, that to properly combine like terms we need to artificially add 0's. This is a mental trick we tacitly do when we compute anyways but this idea of extending a polynomial by 0 is crucial to defining the addition and multiplication operations.   Alternatives to Extension by 0  An alternative (more rigorous) way of defining addition and multiplication is to not use the variable at all. But rather to think of polynomials as defined by their coefficients. In this case, we define a polynomial as a list of integers (indexed by ): such that only finitely many of the entries are non-zero. Or equivalently, that there exists such that for all .     Given two polynomials , we define their sum as follows. Write If , we extend by 0: where . If , we extend by 0: where . Then     The extra effort we've put in to defining polynomial addition will simplify proofs as the following proposition shows.    Addition of integral polynomials is commutative. That is, for any , we have      Suppose . Possibly by extending by 0, we can assume Then    Notice that in the proof of we did not need to go into cases based off of if the degree of is greater than or less than the degree of .    Mimic the proof of to prove that addition of integral polynomials is associative.    We now handle polynomial multiplication. We first recall how polynomial multiplication works with the goal of writing a definition down.    Consider the integral polynomials and . Let's compute their product using distribution:     In particular, to compute the produce we needed to be able to: compute all pairwise products between terms of and terms of and then combine like terms. The following definition will be a formalization of this and in particular is somewhat involved due to the nature of poynomial multiplication.    Given two polynomials , we define their sum as follows. Write Extend both and by so that: where . Then where and where     As was the case with polynomial addition, this definition is aimed to make proving statements about polynomial muliplication easier.    Multplication of integral polynomials is commutative. That is, for any , we have .    Take of degrees , respectively. Extend both by zero so that where and .  Then where We also have where We need to show .  To that end, recall that addition in is commutative and multiplication is commutative too: Since the coefficients of and agreee they are equal polynomials.    The preceeding proof was necessarily long and somewhat complicated because polynomial multiplication is long and complicated. It's also worth noting that we very much relied on arithmetic properties of , particular commutative multiplication.  We leave our discussion of integral polynomials to introduce the main course: rings . We will then return to them as important examples or rings.    Rings   ring  unity   A ring  is a nonempty set, together with binary operations and , denoted , and satisfying the following axioms.   Given any , . (Associativity of addition)    Given any , . (Commutativity of addition)    There exists an element such that for all , . (Additive identity)    Given any there exists a such that . (Additive inverses)    Given any , . (Associativity of multiplication)    There exists an element , such that for all . (Multiplicative identity)    For all , . (Left-distributive property)    For all , . (Right-distributive property)   As with fields, when the ring is clear from context, we will often write in place of and in place of . The element is also referred to as the unity .     Non-Unital Rings  Most rings of interest in modern algebra, particularly commutative algebra, have a multiplicative identity. Algebraic structures that satisfy all the ring axioms except for the multiplicative identity are called non-unital rings and are sometimes referred to as rngs (without the i).     Compare and contrast Definitions and . What are the similarities? What are the differences?    While rings do not enjoy all the properties of fields, they are incredibly useful even in applied mathematics (see, e.g., for one recent example).    commutative ring  A ring is said to be commutative if, for all , .      The integers form a ring. We have actually assumed all the ring axioms for the majority of this text and will continue to assume them. A proof of the ring axioms requires a deeper dive on the natural numbers and is more suited to an introduction to proof course. Nevertheless, we will continue to freely use that is a commutative ring. The unity is and the additive identity is .      All fields are rings. Fields satisfy all eight rings axioms plus an additional two: commutative multiplication and every non-zero element has a multiplicative inverse.    We now return to polynomials. First, we will define polynomials over general rings.    Let be a ring. A polynomial in with coefficients in is an expression of the form , where and . We will sometimes omit the function notation and denote simply by . The set of all polynomials over is: The general definitions of equality, degree, terms, coefficients, extension by 0, addition, and multiplication carry over directly to polynomials over .    Unlike fields, rings need not be commutative. In fact, an important class of examples of non-commutative rings are matrix rings. We'll see a first example in .     Which properties of fields in Theorem hold for (commutative) rings?      Are all rings fields? Are all fields rings? Justify.     Emmy Noether     Portrait of Emmy Noether   In the 1920s, Emmy Noether was the first to explicitly describe the ring axioms as we know them today, and her definition of a (not-necessarily-commutative) ring has led to a great deal of interesting work in algebra, number theory, and geometry, including the (see for more on the historical development of the proof of Fermat's Last Theorem). Most modern definitions of ring agree with our Definition and allow for rings with noncommutative multiplication.   The following theorem states that the set of polynomials with coefficients in a ring is itself a ring under the usual operations of polynomial addition of like terms, and multiplication via distribution. The proof is not tricky, but a rigorous justification (especially of, e.g., the associativity of polynomial multiplication) is tedious, and thus is omitted.   Theorem   If is a (commutative) ring, then is a (commutative) ring.    As in the proof of , we see that if is a ring and is commutative, then must also be commutative. The proof carries over mutatis mutandis .  To see that is a ring, we need to check all eight axioms. Before we do that, recall in that we have already seen polynomial addition is commutative provided the addition of coefficients is commutative. That proof therefore carries over mutatis mutandis .  We check associativity. Take and, by extending by 0, we can assume where for . Then the coefficient of in is . The coefficient of in is . Since is a ring and addition is associative in we have . Since the coefficients of and are equal, they are equal polynomials.  We claim is the additive identity. Take and write Then extend by zero: The sum is then: as is the additive identity in so that for all . Similarly, .  For additive inverses, suppose is as before. Then define by: where is the additive inverse of the coefficient in . Then Similarly .  The proof that multiplication is associative is particularly notationally dense and we leave it as an exercise. For the multiplicative identity, set . Take a polynomial as before. We extend by zero via: where and for . Then the product where However, for so for we have by Exercise???? In particular, . Since the coefficients of and are equal, the polynomials are equal: . Similarly .  The remaining two proofs are left- and right-distributive properties. As they are similar, we only prove the left-distributive property. TBD.    The preceeding theorem says that whenever we have a ring, polynomials with coefficients in that ring again form a ring. In particular, if is a ring, then so is , and hence so is and so on. This leads us to the corollary:    Let be a (commutative) ring and be indeterminates. Then the set of polynomials in with coefficients in , , is a (commutative) ring.    We proceed by induction. The base case is . This is the content of .  For the inductive step, suppose is a (commutative) ring. By , is again a (commutative) ring. But the latter is the .     We now have some great examples of commutative rings. Namely polynomial rings in some number of variables over any of or . As we have yet to see an example of a non-commutative ring we remedy this now.   Square Matrices   Consider the set of square matrices over (or whatever ring or field you like to work with). We recall matrix addition and multiplication: and   In Exercise???? you will check this is a ring. We show that multiplication is not commutative. To that end, consider: Then In particular, and so matrix multiplication is not commutative.    In the previous example, we observed that matrix multiplication failed to be commutative for matrices with real entries. What about for entries in a general ring? If you review that example, you will notice the only reason the products did not agree is because in . The next example shows that the multiplicative identity and additive identity sometimes agree.   The Zero Ring   Let . That is, a set with one element. Define addition and multiplication by and . We claim that addition and multiplication define a ring structure on .  Almost all of the checks are straightforward. For example, to check associativity of addition we only have one element so we just check . But there is only one thing both sides can be: . So addition is associative.  The only property that warrants inspection is the multiplicative identity. We claim that in this ring . Indeed, we need to show that for every that . But there's only element to check this on: where it is true.  We conclude that the zero ring is a ring!      Subrings: New Rings from Old   subring  overring   Let be a ring and let . If is itself a ring under and , we say is a subring of . In this case, is often called an overring of .    The following theorem provides a easy-to-apply test to check if a given subset of a ring is in fact a subring of .   Subring Test  subring test   Let be a ring and a subset of . Then is a subring if and only if:    ;     is closed under multiplication; and     is closed under subtraction.       Suppose and is closed under multiplication and subtraction. We check each of the axioms in . Since and is closed under subtraction we have . For any , we know that so that Thus and are the additive and multiplicative identities, respectively, in .  For any , we know that . Thus is closed under additive inverses. If , then so that is closed under addition.  For any triple of elements , we know so that and . Thus associativity and commutativity of addition are inherited from . Similarly, , , and . That is, inherits associativity of multiplication as well as the left- and right-distributive properties from .  We conclude that is a ring under the multiplication and addition from .      In , we saw that was a field and so it is a commutative ring. Let's define a subset of this field by taking those elements with integral real and imaginary part: We claim that is a subring of . To that end we apply the subring test. That is, , it is closed under subtraction and multiplication.  We see that and so our subset has the multiplicative identity.  For closure under subtraction, take . Then and . We conclude is closed under subtraction.  For closure under multiplication we compute: and again .  By the , we conclude is a subring of . In particular, it is a ring.      Determine whether the following rings are subrings of the given rings .    ,      ,      is any ring,      ,            Units and Associates in a Ring   unit  associates   Let be a ring and let be nonzero. If there is a such that , we say is unit of . We denote the set of units of by . We say are associates if there exists some such that .      Explicitly describe the set . What are the associates of 7 in ?    In other words, a unit in a ring is a nonzero element with a multiplicative inverse. The existence of units is the primary difference between fields and commutative rings: in a field, all nonzero elements are units, while in a commutative ring, no nonzero elements need be units, as demonstrates.    We describe the units in . Notice that for , of degrees respectively, the leading coefficient of is But for and for . Using this observation, we can conclude that , see Exercise???? Since and the product of two non-zero integers remains non-zero, we conclude that . In particular,   Now suppose that in . Then Since , the only way this can happen is if so that are constant polynomials. Thus are units in . We conclude       A commutative ring in which every nonzero element is a unit is a field.     Compare the axioms for a commutative ring and a field. The only thing missing from the ring axioms is the existence of multiplicative inverses for nonzero elements.     Mark the following as true or false.    All fields are rings.    All rings are fields.    All rings are commutative.    Addition in any ring is commutative and associative.    Multiplication in any ring is commutative and associative.    In a ring, the left- and right-distibutive laws hold.    In a ring, only the left-distributive law is guaranteed to hold.    All rings are rngs, but not all rngs are rings.     is a ring with the usual operations of addition and multiplication.     is a ring with the usual operations of addition and multiplication.     is a ring with the usual operations of addition and multiplication.     is a ring with the usual operations of addition and multiplication.      Consider the polynomial ring with integer coefficients . Prove that the left- and right-distributive laws hold. You can use that polynomial multiplication is commutative to simplify some of your work.   Gaussian Integers  The Gaussian Integers are the subset of given by     Using the usual addition and multiplication in , prove that the Gaussian Integers are a ring (don't appeal to ).    Use the to prove that the Gaussian Integers are a ring.      Compute the units in .     Square Matrices over a Ring   Consider the set of matrices with real entries, , as in .    Prove is a ring with the usual matrix addition and matrix multiplication.    What is special about ? Does your proof work if is replaced by an arbitrary ring ?    What is special about ? What about the set of matrices with entries in a ring , denoted ?      Prove the set of integer multiples of : is a rng but not a ring. You can appeal to the subrng test but also be able to do it straight from the definition.    Prove that in a ring (or rng), the additive identity is unique.    Prove that in a ring (or rng), the multiplicative identity is unique.    Prove that in a ring (or rng), the product of the additive identity and any element is 0.   Upper Triangular Matrices   Upper Triangular Matrices  Upper Triangular Matrices  Use the subring test to prove that the collection of upper triangular matrices -matrices over a general ring , denoted forms a ring. An upper triangular -matrix looks like where .   Lower Triangular Matrices  How would the previous proof change with Lower Triangular Matrices?    Explain why the set of upper uni-triangular matrices with coefficients in a ring is not a ring. A upper uni-triangular matrix is a matrix of the form: where .    Consider the subset defined by: Prove that is a subring of .    In contrast to the previous example, show that the subset defined by is not a subring of .      C. Curto, V. Itskov, A. Veliz-Cuba, N. Youngs, The Neural Ring: An Algebraic Tool for Analyzing the Intrinsic Structure of Neural Codes , Bull. Math. Bio. 75 (2013), 1571-1611, DOI 10.1007\/s11538-013-9860-3    "
},
{
  "id": "obj_rings",
  "level": "2",
  "url": "sec_rings.html#obj_rings",
  "type": "Guiding Questions",
  "number": "2.2",
  "title": "Guiding Questions",
  "body": " Guiding Questions   In this section, we'll seek to answer the questions:    What are rings and how do they relate to fields?  What are subrings, and how can we tell if a given subset of a ring is a subring?   "
},
{
  "id": "def_polynomial",
  "level": "2",
  "url": "sec_rings.html#def_polynomial",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  A polynomial in with coefficients in is an expression of the form , where and . We will sometimes omit the function notation and denote simply by . We call the degree of the polynomial , denoted , and the coefficients of the polynomial. The coefficient is known as the leading coefficient of , and is the leading term of . The set of all integral polynomials is: Lastly, two polynomials are equal if and only if they have the same coefficients.   "
},
{
  "id": "def_polynomialAddition",
  "level": "2",
  "url": "sec_rings.html#def_polynomialAddition",
  "type": "Definition",
  "number": "2.2.2",
  "title": "",
  "body": "  Given two polynomials , we define their sum as follows. Write If , we extend by 0: where . If , we extend by 0: where . Then    "
},
{
  "id": "prop_polynomialAdditionIsCommutative",
  "level": "2",
  "url": "sec_rings.html#prop_polynomialAdditionIsCommutative",
  "type": "Proposition",
  "number": "2.2.3",
  "title": "",
  "body": "  Addition of integral polynomials is commutative. That is, for any , we have    "
},
{
  "id": "ssec_polynomialRing-9",
  "level": "2",
  "url": "sec_rings.html#ssec_polynomialRing-9",
  "type": "Proof",
  "number": "2.2.1.1",
  "title": "",
  "body": " Suppose . Possibly by extending by 0, we can assume Then   "
},
{
  "id": "ssec_polynomialRing-11",
  "level": "2",
  "url": "sec_rings.html#ssec_polynomialRing-11",
  "type": "Exploration",
  "number": "2.2.1",
  "title": "",
  "body": "  Mimic the proof of to prove that addition of integral polynomials is associative.   "
},
{
  "id": "ssec_polynomialRing-13",
  "level": "2",
  "url": "sec_rings.html#ssec_polynomialRing-13",
  "type": "Example",
  "number": "2.2.4",
  "title": "",
  "body": "  Consider the integral polynomials and . Let's compute their product using distribution:    "
},
{
  "id": "def_polynomialMultiplication",
  "level": "2",
  "url": "sec_rings.html#def_polynomialMultiplication",
  "type": "Definition",
  "number": "2.2.5",
  "title": "",
  "body": "  Given two polynomials , we define their sum as follows. Write Extend both and by so that: where . Then where and where    "
},
{
  "id": "prop_polynomialMultiplicationIsCommutative",
  "level": "2",
  "url": "sec_rings.html#prop_polynomialMultiplicationIsCommutative",
  "type": "Proposition",
  "number": "2.2.6",
  "title": "",
  "body": "  Multplication of integral polynomials is commutative. That is, for any , we have .    Take of degrees , respectively. Extend both by zero so that where and .  Then where We also have where We need to show .  To that end, recall that addition in is commutative and multiplication is commutative too: Since the coefficients of and agreee they are equal polynomials.   "
},
{
  "id": "def_ring",
  "level": "2",
  "url": "sec_rings.html#def_ring",
  "type": "Definition",
  "number": "2.2.7",
  "title": "",
  "body": " ring  unity   A ring  is a nonempty set, together with binary operations and , denoted , and satisfying the following axioms.   Given any , . (Associativity of addition)    Given any , . (Commutativity of addition)    There exists an element such that for all , . (Additive identity)    Given any there exists a such that . (Additive inverses)    Given any , . (Associativity of multiplication)    There exists an element , such that for all . (Multiplicative identity)    For all , . (Left-distributive property)    For all , . (Right-distributive property)   As with fields, when the ring is clear from context, we will often write in place of and in place of . The element is also referred to as the unity .   "
},
{
  "id": "ssec_rings-4",
  "level": "2",
  "url": "sec_rings.html#ssec_rings-4",
  "type": "Investigation",
  "number": "2.2.2",
  "title": "",
  "body": "  Compare and contrast Definitions and . What are the similarities? What are the differences?   "
},
{
  "id": "ssec_rings-6",
  "level": "2",
  "url": "sec_rings.html#ssec_rings-6",
  "type": "Definition",
  "number": "2.2.8",
  "title": "",
  "body": "  commutative ring  A ring is said to be commutative if, for all , .   "
},
{
  "id": "ssec_rings-7",
  "level": "2",
  "url": "sec_rings.html#ssec_rings-7",
  "type": "Example",
  "number": "2.2.9",
  "title": "",
  "body": "  The integers form a ring. We have actually assumed all the ring axioms for the majority of this text and will continue to assume them. A proof of the ring axioms requires a deeper dive on the natural numbers and is more suited to an introduction to proof course. Nevertheless, we will continue to freely use that is a commutative ring. The unity is and the additive identity is .   "
},
{
  "id": "ssec_rings-8",
  "level": "2",
  "url": "sec_rings.html#ssec_rings-8",
  "type": "Example",
  "number": "2.2.10",
  "title": "",
  "body": "  All fields are rings. Fields satisfy all eight rings axioms plus an additional two: commutative multiplication and every non-zero element has a multiplicative inverse.   "
},
{
  "id": "def_polynomialGeneralRing",
  "level": "2",
  "url": "sec_rings.html#def_polynomialGeneralRing",
  "type": "Definition",
  "number": "2.2.11",
  "title": "",
  "body": "  Let be a ring. A polynomial in with coefficients in is an expression of the form , where and . We will sometimes omit the function notation and denote simply by . The set of all polynomials over is: The general definitions of equality, degree, terms, coefficients, extension by 0, addition, and multiplication carry over directly to polynomials over .   "
},
{
  "id": "ssec_rings-12",
  "level": "2",
  "url": "sec_rings.html#ssec_rings-12",
  "type": "Exploration",
  "number": "2.2.3",
  "title": "",
  "body": "  Which properties of fields in Theorem hold for (commutative) rings?   "
},
{
  "id": "ssec_rings-13",
  "level": "2",
  "url": "sec_rings.html#ssec_rings-13",
  "type": "Investigation",
  "number": "2.2.4",
  "title": "",
  "body": "  Are all rings fields? Are all fields rings? Justify.   "
},
{
  "id": "ssec_rings-14-2-1",
  "level": "2",
  "url": "sec_rings.html#ssec_rings-14-2-1",
  "type": "Figure",
  "number": "2.2.12",
  "title": "",
  "body": "  Portrait of Emmy Noether   "
},
{
  "id": "thm_polynomialsFormRing",
  "level": "2",
  "url": "sec_rings.html#thm_polynomialsFormRing",
  "type": "Theorem",
  "number": "2.2.13",
  "title": "Theorem.",
  "body": " Theorem   If is a (commutative) ring, then is a (commutative) ring.    As in the proof of , we see that if is a ring and is commutative, then must also be commutative. The proof carries over mutatis mutandis .  To see that is a ring, we need to check all eight axioms. Before we do that, recall in that we have already seen polynomial addition is commutative provided the addition of coefficients is commutative. That proof therefore carries over mutatis mutandis .  We check associativity. Take and, by extending by 0, we can assume where for . Then the coefficient of in is . The coefficient of in is . Since is a ring and addition is associative in we have . Since the coefficients of and are equal, they are equal polynomials.  We claim is the additive identity. Take and write Then extend by zero: The sum is then: as is the additive identity in so that for all . Similarly, .  For additive inverses, suppose is as before. Then define by: where is the additive inverse of the coefficient in . Then Similarly .  The proof that multiplication is associative is particularly notationally dense and we leave it as an exercise. For the multiplicative identity, set . Take a polynomial as before. We extend by zero via: where and for . Then the product where However, for so for we have by Exercise???? In particular, . Since the coefficients of and are equal, the polynomials are equal: . Similarly .  The remaining two proofs are left- and right-distributive properties. As they are similar, we only prove the left-distributive property. TBD.   "
},
{
  "id": "cor_multivariatePolynomialRingIsARing",
  "level": "2",
  "url": "sec_rings.html#cor_multivariatePolynomialRingIsARing",
  "type": "Corollary",
  "number": "2.2.14",
  "title": "",
  "body": "  Let be a (commutative) ring and be indeterminates. Then the set of polynomials in with coefficients in , , is a (commutative) ring.    We proceed by induction. The base case is . This is the content of .  For the inductive step, suppose is a (commutative) ring. By , is again a (commutative) ring. But the latter is the .   "
},
{
  "id": "ex_M2R",
  "level": "2",
  "url": "sec_rings.html#ex_M2R",
  "type": "Example",
  "number": "2.2.15",
  "title": "Square Matrices.",
  "body": " Square Matrices   Consider the set of square matrices over (or whatever ring or field you like to work with). We recall matrix addition and multiplication: and   In Exercise???? you will check this is a ring. We show that multiplication is not commutative. To that end, consider: Then In particular, and so matrix multiplication is not commutative.   "
},
{
  "id": "ssec_rings-22",
  "level": "2",
  "url": "sec_rings.html#ssec_rings-22",
  "type": "Example",
  "number": "2.2.16",
  "title": "The Zero Ring.",
  "body": " The Zero Ring   Let . That is, a set with one element. Define addition and multiplication by and . We claim that addition and multiplication define a ring structure on .  Almost all of the checks are straightforward. For example, to check associativity of addition we only have one element so we just check . But there is only one thing both sides can be: . So addition is associative.  The only property that warrants inspection is the multiplicative identity. We claim that in this ring . Indeed, we need to show that for every that . But there's only element to check this on: where it is true.  We conclude that the zero ring is a ring!   "
},
{
  "id": "ssec_subrings-2",
  "level": "2",
  "url": "sec_rings.html#ssec_subrings-2",
  "type": "Definition",
  "number": "2.2.17",
  "title": "",
  "body": " subring  overring   Let be a ring and let . If is itself a ring under and , we say is a subring of . In this case, is often called an overring of .   "
},
{
  "id": "thm_subringTest",
  "level": "2",
  "url": "sec_rings.html#thm_subringTest",
  "type": "Theorem",
  "number": "2.2.18",
  "title": "Subring Test.",
  "body": " Subring Test  subring test   Let be a ring and a subset of . Then is a subring if and only if:    ;     is closed under multiplication; and     is closed under subtraction.       Suppose and is closed under multiplication and subtraction. We check each of the axioms in . Since and is closed under subtraction we have . For any , we know that so that Thus and are the additive and multiplicative identities, respectively, in .  For any , we know that . Thus is closed under additive inverses. If , then so that is closed under addition.  For any triple of elements , we know so that and . Thus associativity and commutativity of addition are inherited from . Similarly, , , and . That is, inherits associativity of multiplication as well as the left- and right-distributive properties from .  We conclude that is a ring under the multiplication and addition from .   "
},
{
  "id": "ssec_subrings-5",
  "level": "2",
  "url": "sec_rings.html#ssec_subrings-5",
  "type": "Example",
  "number": "2.2.19",
  "title": "",
  "body": "  In , we saw that was a field and so it is a commutative ring. Let's define a subset of this field by taking those elements with integral real and imaginary part: We claim that is a subring of . To that end we apply the subring test. That is, , it is closed under subtraction and multiplication.  We see that and so our subset has the multiplicative identity.  For closure under subtraction, take . Then and . We conclude is closed under subtraction.  For closure under multiplication we compute: and again .  By the , we conclude is a subring of . In particular, it is a ring.   "
},
{
  "id": "ssec_subrings-6",
  "level": "2",
  "url": "sec_rings.html#ssec_subrings-6",
  "type": "Activity",
  "number": "2.2.5",
  "title": "",
  "body": "  Determine whether the following rings are subrings of the given rings .    ,      ,      is any ring,      ,         "
},
{
  "id": "def_unit",
  "level": "2",
  "url": "sec_rings.html#def_unit",
  "type": "Definition",
  "number": "2.2.20",
  "title": "",
  "body": " unit  associates   Let be a ring and let be nonzero. If there is a such that , we say is unit of . We denote the set of units of by . We say are associates if there exists some such that .   "
},
{
  "id": "ssec_unitsAndAssociates-3",
  "level": "2",
  "url": "sec_rings.html#ssec_unitsAndAssociates-3",
  "type": "Exploration",
  "number": "2.2.6",
  "title": "",
  "body": "  Explicitly describe the set . What are the associates of 7 in ?   "
},
{
  "id": "ssec_unitsAndAssociates-5",
  "level": "2",
  "url": "sec_rings.html#ssec_unitsAndAssociates-5",
  "type": "Example",
  "number": "2.2.21",
  "title": "",
  "body": "  We describe the units in . Notice that for , of degrees respectively, the leading coefficient of is But for and for . Using this observation, we can conclude that , see Exercise???? Since and the product of two non-zero integers remains non-zero, we conclude that . In particular,   Now suppose that in . Then Since , the only way this can happen is if so that are constant polynomials. Thus are units in . We conclude    "
},
{
  "id": "thm-cri-field",
  "level": "2",
  "url": "sec_rings.html#thm-cri-field",
  "type": "Theorem",
  "number": "2.2.22",
  "title": "",
  "body": "  A commutative ring in which every nonzero element is a unit is a field.   "
},
{
  "id": "ssec_unitsAndAssociates-7",
  "level": "2",
  "url": "sec_rings.html#ssec_unitsAndAssociates-7",
  "type": "Proof",
  "number": "2.2.4.1",
  "title": "",
  "body": " Compare the axioms for a commutative ring and a field. The only thing missing from the ring axioms is the existence of multiplicative inverses for nonzero elements.  "
},
{
  "id": "exers_rings-1",
  "level": "2",
  "url": "sec_rings.html#exers_rings-1",
  "type": "Exercise",
  "number": "2.2.4.1",
  "title": "",
  "body": " Mark the following as true or false.    All fields are rings.    All rings are fields.    All rings are commutative.    Addition in any ring is commutative and associative.    Multiplication in any ring is commutative and associative.    In a ring, the left- and right-distibutive laws hold.    In a ring, only the left-distributive law is guaranteed to hold.    All rings are rngs, but not all rngs are rings.     is a ring with the usual operations of addition and multiplication.     is a ring with the usual operations of addition and multiplication.     is a ring with the usual operations of addition and multiplication.     is a ring with the usual operations of addition and multiplication.    "
},
{
  "id": "exers_rings-2",
  "level": "2",
  "url": "sec_rings.html#exers_rings-2",
  "type": "Exercise",
  "number": "2.2.4.2",
  "title": "",
  "body": " Consider the polynomial ring with integer coefficients . Prove that the left- and right-distributive laws hold. You can use that polynomial multiplication is commutative to simplify some of your work.  "
},
{
  "id": "exer_gaussianIntegers",
  "level": "2",
  "url": "sec_rings.html#exer_gaussianIntegers",
  "type": "Exercise",
  "number": "2.2.4.3",
  "title": "Gaussian Integers.",
  "body": "Gaussian Integers  The Gaussian Integers are the subset of given by     Using the usual addition and multiplication in , prove that the Gaussian Integers are a ring (don't appeal to ).    Use the to prove that the Gaussian Integers are a ring.    "
},
{
  "id": "exers_rings-4",
  "level": "2",
  "url": "sec_rings.html#exers_rings-4",
  "type": "Exercise",
  "number": "2.2.4.4",
  "title": "",
  "body": " Compute the units in .  "
},
{
  "id": "exers_rings-5",
  "level": "2",
  "url": "sec_rings.html#exers_rings-5",
  "type": "Exercise",
  "number": "2.2.4.5",
  "title": "",
  "body": "  Square Matrices over a Ring   Consider the set of matrices with real entries, , as in .    Prove is a ring with the usual matrix addition and matrix multiplication.    What is special about ? Does your proof work if is replaced by an arbitrary ring ?    What is special about ? What about the set of matrices with entries in a ring , denoted ?    "
},
{
  "id": "exers_rings-6",
  "level": "2",
  "url": "sec_rings.html#exers_rings-6",
  "type": "Exercise",
  "number": "2.2.4.6",
  "title": "",
  "body": " Prove the set of integer multiples of : is a rng but not a ring. You can appeal to the subrng test but also be able to do it straight from the definition.  "
},
{
  "id": "exers_rings-7",
  "level": "2",
  "url": "sec_rings.html#exers_rings-7",
  "type": "Exercise",
  "number": "2.2.4.7",
  "title": "",
  "body": " Prove that in a ring (or rng), the additive identity is unique.  "
},
{
  "id": "exers_rings-8",
  "level": "2",
  "url": "sec_rings.html#exers_rings-8",
  "type": "Exercise",
  "number": "2.2.4.8",
  "title": "",
  "body": " Prove that in a ring (or rng), the multiplicative identity is unique.  "
},
{
  "id": "exers_rings-9",
  "level": "2",
  "url": "sec_rings.html#exers_rings-9",
  "type": "Exercise",
  "number": "2.2.4.9",
  "title": "",
  "body": " Prove that in a ring (or rng), the product of the additive identity and any element is 0.  "
},
{
  "id": "exer_upperTriangularMatrices",
  "level": "2",
  "url": "sec_rings.html#exer_upperTriangularMatrices",
  "type": "Exercise",
  "number": "2.2.4.10",
  "title": "Upper Triangular Matrices.",
  "body": "Upper Triangular Matrices   Upper Triangular Matrices  Upper Triangular Matrices  Use the subring test to prove that the collection of upper triangular matrices -matrices over a general ring , denoted forms a ring. An upper triangular -matrix looks like where .  "
},
{
  "id": "exers_rings-11",
  "level": "2",
  "url": "sec_rings.html#exers_rings-11",
  "type": "Exercise",
  "number": "2.2.4.11",
  "title": "",
  "body": "Lower Triangular Matrices  How would the previous proof change with Lower Triangular Matrices?  "
},
{
  "id": "exers_rings-12",
  "level": "2",
  "url": "sec_rings.html#exers_rings-12",
  "type": "Exercise",
  "number": "2.2.4.12",
  "title": "",
  "body": " Explain why the set of upper uni-triangular matrices with coefficients in a ring is not a ring. A upper uni-triangular matrix is a matrix of the form: where .  "
},
{
  "id": "exers_rings-13",
  "level": "2",
  "url": "sec_rings.html#exers_rings-13",
  "type": "Exercise",
  "number": "2.2.4.13",
  "title": "",
  "body": " Consider the subset defined by: Prove that is a subring of .  "
},
{
  "id": "exers_rings-14",
  "level": "2",
  "url": "sec_rings.html#exers_rings-14",
  "type": "Exercise",
  "number": "2.2.4.14",
  "title": "",
  "body": " In contrast to the previous example, show that the subset defined by is not a subring of .  "
},
{
  "id": "sec_integralDomains",
  "level": "1",
  "url": "sec_integralDomains.html",
  "type": "Section",
  "number": "2.3",
  "title": "Integral Domains",
  "body": " Integral Domains   Guiding Questions   In this section, we'll seek to answer the questions:    What are zero divisors?  What are integral domains, and how do they relate to rings and fields?     In the realm of ring theory, certain rings behave similarly to : they are commutative and when we multiply any two non-zero integers it remains non-zero. Either (or both!) of these two properties are violated in general rings. We've already encountered commutative rings and so we begin by formalizing the latter property.    Zero Divisors  One of the interesting side effects of our definition of ring is that it allows for behavior that may at first appear unintuitive or downright weird.   zero divisor   A zero divisor in a ring is a nonzero element such that there is a nonzero with or .    Notice that the reason the idea of zero divisors at first appears weird is that they are not something we encounter when working with our familiar sets of numbers, such as or . In fact, we specifically use the fact that there are no zero divisors in our familiar numbers systems to solve equations in high school algebra (e.g., if , then or ). The lack of zero divisors is one of the properties that does not persist in our abstraction from the integers to rings in general.    Find, with justification, all of the zero divisors in and . Make and prove a conjecture about the existence of zero divisors in , where .    The zero divisors in are . There are no zero divisors in .   conjecture.  is a zero divisor if and only if .       Let be a ring and suppose such that is a zero divisor. Then either or is a zero divisor.     Let such that is a zero divisor. Then (else ). Since is a zero divisor, there is some such that . If , then is a zero divisor, as . On the other hand, if , then is a zero divisor, as .   In we defined units. Units are somehow opposite zero-divisors as the following theorem shows.    Let be a ring and . Then is not a zero divisor.     Let and suppose is a zero divisor. Then there is some such that . But then . \\Lightning     How can we reinterpret in light of our new language of units and zero divisors? State a theorem that uses this new language.    Answers may vary, but how about this: Let such that . Then if is not a zero divisor.      Integral Domains  While non-commutative rings and zero divisors are of interest to mathematicians, we will focus put our focus on commutative rings without zero divisors for now. As these rings share many properties of the integers, they are known as integral domains .   integral domain  domain   A non-zero commutative ring is an integral domain , or just domain , if has no zero divisors.    The next activities and theorems help us identify examples of domains, as well as situate the notion of a domain in its proper place relative to fields and rings in general.    Which of the following rings are domains? Justify your answers.                                Gaussian Integers are a Domain   The Gaussian Integers are a domain. Indeed, they are a subring of the field . We will see in that this is sufficient to deduce they are a domain.  For now, we know that as a subring of a commutative ring, the multiplication in is commutative. Suppose there are such that their product is zero: which tells us and .  Let's look at . One of two cases happend: or . If , then either or as is a domain. If , then as desired. If , then tells us . Again, or . If , then and we are finished. Otherwise and and we are finished.  If , then a similar analysis shows that none of can be zero. Multiply through by and multiply through by we get: and . Hence, and since we can cancel it to get . The left hand side is positive while the right hand side is negative, a contradiction. We conclude that does not have zero-divisors and it is therefore a domain.      Every field is a domain.     If is a field, the nonzero elements of are units, which cannot be zero divisors by . Thus, has no zero divisors.     Let and . Then is a field if and only if is a domain.     The forward direction holds by Theorem .  For the reverse, assume is a domain. Then has no zero divisors. If is composite, there exist integers satisfying such that . Then in , but . Thus, may not be composite, and is therefore prime. By an earlier theorem, is a field.     If is a domain and is a subring of , then is a domain.     Any zero divisors in are also zero divisors in . Since has no zero divisors, neither does .   Note that the converse of is not true. Namely, the set of -matrices over , , is not a domain. Yet it contains a copy of as the scalar matrices . Since is a field, it is also a domain.    Fill in the following blanks in order of increasing generality with the words ring , integral domain , field , and commutative ring .  __________ __________ __________ __________      Polynomial Rings are Domains  We now show that the property of being a domain can be passed on to polynomial rings.    Suppose is a ring. Then is a domain if and only if is a domain.     For the forward direction, suppose that is a domain. Let and be nonzero polynomials in , where . Then the lowest-degree term in is . Since is a domain, , and thus is not the zero polynomial. Thus has no zero-divisors. Since is commutative, so is by . Thus is a domain as well.  For the reverse direction, suppose that is a domain. Then can be viewed as a subring of via constant polynomials. By , is a domain as well.     Is the converse of Theorem true? If so, give a short proof. If not, find a counterexample.    Yes. Apply Theorem .    Since every field is a domain, we have the following immediate corollary of .    Given a field , the set of polynomials is a domain.    When considering sets of polynomials, as we do in (particularly in ), the following results will be quite useful.    Let be a domain, and let be nonzero polynomials. Then .    Let the leading term of be and the leading term of be . Then the leading term of is . (Observe that since is a domain, .) Thus, .      Can the hypotheses of be relaxed? If so, provide more general hypotheses and adapt the proof. If not, give an illustrative example.    If we were to relax the property of a domain we have two choices: relax commutativity or relax zero-divisors. Relaxing commutativity means we are allowing for non-commutative coefficient rings, such as . Relaxing zero-divisors means allowing fro zero-divisors.  If we allow for zero-divisors, then the theorem fails: Let . Observe that , but has degree 1. This is because the leading coefficients are zero-divisors.  If we allow for non-commutative rings without zero-divisors (we have not encountered any of these yet), then the theorem remains true. Indeed, the leading coefficient of the product is the product of the leading coefficients. Since our ring has no zero-divisors, the same proof works!      Let be a domain. What are the units of ? Prove your answer.    The units are . Clearly, .  Suppose such that . Then . Thus , and consequently, .       Mark the following as true or false.    All fields are integral domains.    All rings are domains.    All domains are fields    All integral domains are rings    All integral domains are commutative.    In an integral domain, there are no zero divisors.     is an integral domain.     is an integral domain.     is an integral domain     is a domain.      Prove that the are a domain.    Find all the units in the Gaussian Integers. THat is, compute .    Square matrices over a ring are never an integral domain (unless the coefficient rings is and ). Prove for a general ring that is not a domain for .    The is a convenient way to test if a subring is a ring. Formulate and prove a sub-domain test.    In the Gaussian Integers, we can factor in at least two ways: Clearly and . Use the definition of units and associates to explain what is happening here.    Verify that is a subring of . Is it a sub-domain?    Verify that is a subring of . Is it a sub-domain?    Prove that any subring of an integral domain is an integral domain.   Nilpotent Elements Nilpotent Elements  An element is called nilpotent if there exists such that .    Verify that is a nilpotent element (of whatever coefficient ring you want).    Verify that is a nilpotent element of .    Prove that a non-zero nilpotent element is a zero-divisor.    Show that is a zero-divisor but not nilpotent. That is, the converse to the previous part is false in general.      Prove that if is nilpotent, then .     C. Curto, V. Itskov, A. Veliz-Cuba, N. Youngs, The Neural Ring: An Algebraic Tool for Analyzing the Intrinsic Structure of Neural Codes , Bull. Math. Bio. 75 (2013), 1571-1611, DOI 10.1007\/s11538-013-9860-3    "
},
{
  "id": "obj_integralDomains",
  "level": "2",
  "url": "sec_integralDomains.html#obj_integralDomains",
  "type": "Guiding Questions",
  "number": "2.3",
  "title": "Guiding Questions",
  "body": " Guiding Questions   In this section, we'll seek to answer the questions:    What are zero divisors?  What are integral domains, and how do they relate to rings and fields?   "
},
{
  "id": "ssec_zeroDivisors-3",
  "level": "2",
  "url": "sec_integralDomains.html#ssec_zeroDivisors-3",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": " zero divisor   A zero divisor in a ring is a nonzero element such that there is a nonzero with or .   "
},
{
  "id": "ssec_zeroDivisors-5",
  "level": "2",
  "url": "sec_integralDomains.html#ssec_zeroDivisors-5",
  "type": "Exploration",
  "number": "2.3.1",
  "title": "",
  "body": "  Find, with justification, all of the zero divisors in and . Make and prove a conjecture about the existence of zero divisors in , where .    The zero divisors in are . There are no zero divisors in .   conjecture.  is a zero divisor if and only if .   "
},
{
  "id": "ssec_zeroDivisors-6",
  "level": "2",
  "url": "sec_integralDomains.html#ssec_zeroDivisors-6",
  "type": "Theorem",
  "number": "2.3.2",
  "title": "",
  "body": "  Let be a ring and suppose such that is a zero divisor. Then either or is a zero divisor.   "
},
{
  "id": "ssec_zeroDivisors-7",
  "level": "2",
  "url": "sec_integralDomains.html#ssec_zeroDivisors-7",
  "type": "Proof",
  "number": "2.3.1.1",
  "title": "",
  "body": " Let such that is a zero divisor. Then (else ). Since is a zero divisor, there is some such that . If , then is a zero divisor, as . On the other hand, if , then is a zero divisor, as .  "
},
{
  "id": "thm_unitnotazd",
  "level": "2",
  "url": "sec_integralDomains.html#thm_unitnotazd",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "",
  "body": "  Let be a ring and . Then is not a zero divisor.   "
},
{
  "id": "ssec_zeroDivisors-10",
  "level": "2",
  "url": "sec_integralDomains.html#ssec_zeroDivisors-10",
  "type": "Proof",
  "number": "2.3.1.2",
  "title": "",
  "body": " Let and suppose is a zero divisor. Then there is some such that . But then . \\Lightning  "
},
{
  "id": "ssec_zeroDivisors-11",
  "level": "2",
  "url": "sec_integralDomains.html#ssec_zeroDivisors-11",
  "type": "Investigation",
  "number": "2.3.2",
  "title": "",
  "body": "  How can we reinterpret in light of our new language of units and zero divisors? State a theorem that uses this new language.    Answers may vary, but how about this: Let such that . Then if is not a zero divisor.   "
},
{
  "id": "ssec_integralDomains-2",
  "level": "2",
  "url": "sec_integralDomains.html#ssec_integralDomains-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral domains "
},
{
  "id": "ssec_integralDomains-3",
  "level": "2",
  "url": "sec_integralDomains.html#ssec_integralDomains-3",
  "type": "Definition",
  "number": "2.3.4",
  "title": "",
  "body": " integral domain  domain   A non-zero commutative ring is an integral domain , or just domain , if has no zero divisors.   "
},
{
  "id": "ssec_integralDomains-5",
  "level": "2",
  "url": "sec_integralDomains.html#ssec_integralDomains-5",
  "type": "Activity",
  "number": "2.3.3",
  "title": "",
  "body": "  Which of the following rings are domains? Justify your answers.                              "
},
{
  "id": "ex_gaussianIntegersAreDomain",
  "level": "2",
  "url": "sec_integralDomains.html#ex_gaussianIntegersAreDomain",
  "type": "Example",
  "number": "2.3.5",
  "title": "Gaussian Integers are a Domain.",
  "body": " Gaussian Integers are a Domain   The Gaussian Integers are a domain. Indeed, they are a subring of the field . We will see in that this is sufficient to deduce they are a domain.  For now, we know that as a subring of a commutative ring, the multiplication in is commutative. Suppose there are such that their product is zero: which tells us and .  Let's look at . One of two cases happend: or . If , then either or as is a domain. If , then as desired. If , then tells us . Again, or . If , then and we are finished. Otherwise and and we are finished.  If , then a similar analysis shows that none of can be zero. Multiply through by and multiply through by we get: and . Hence, and since we can cancel it to get . The left hand side is positive while the right hand side is negative, a contradiction. We conclude that does not have zero-divisors and it is therefore a domain.   "
},
{
  "id": "theorem_everyfieldisadomain",
  "level": "2",
  "url": "sec_integralDomains.html#theorem_everyfieldisadomain",
  "type": "Theorem",
  "number": "2.3.6",
  "title": "",
  "body": "  Every field is a domain.   "
},
{
  "id": "ssec_integralDomains-8",
  "level": "2",
  "url": "sec_integralDomains.html#ssec_integralDomains-8",
  "type": "Proof",
  "number": "2.3.2.1",
  "title": "",
  "body": " If is a field, the nonzero elements of are units, which cannot be zero divisors by . Thus, has no zero divisors.  "
},
{
  "id": "ssec_integralDomains-9",
  "level": "2",
  "url": "sec_integralDomains.html#ssec_integralDomains-9",
  "type": "Theorem",
  "number": "2.3.7",
  "title": "",
  "body": "  Let and . Then is a field if and only if is a domain.   "
},
{
  "id": "ssec_integralDomains-10",
  "level": "2",
  "url": "sec_integralDomains.html#ssec_integralDomains-10",
  "type": "Proof",
  "number": "2.3.2.2",
  "title": "",
  "body": " The forward direction holds by Theorem .  For the reverse, assume is a domain. Then has no zero divisors. If is composite, there exist integers satisfying such that . Then in , but . Thus, may not be composite, and is therefore prime. By an earlier theorem, is a field.  "
},
{
  "id": "thm_subringsOfDomainsAreDomains",
  "level": "2",
  "url": "sec_integralDomains.html#thm_subringsOfDomainsAreDomains",
  "type": "Theorem",
  "number": "2.3.8",
  "title": "",
  "body": "  If is a domain and is a subring of , then is a domain.   "
},
{
  "id": "ssec_integralDomains-12",
  "level": "2",
  "url": "sec_integralDomains.html#ssec_integralDomains-12",
  "type": "Proof",
  "number": "2.3.2.3",
  "title": "",
  "body": " Any zero divisors in are also zero divisors in . Since has no zero divisors, neither does .  "
},
{
  "id": "exer_ringGeneralityOne",
  "level": "2",
  "url": "sec_integralDomains.html#exer_ringGeneralityOne",
  "type": "Exploration",
  "number": "2.3.4",
  "title": "",
  "body": "  Fill in the following blanks in order of increasing generality with the words ring , integral domain , field , and commutative ring .  __________ __________ __________ __________   "
},
{
  "id": "thm_domainImpliesPolynomialDomain",
  "level": "2",
  "url": "sec_integralDomains.html#thm_domainImpliesPolynomialDomain",
  "type": "Theorem",
  "number": "2.3.9",
  "title": "",
  "body": "  Suppose is a ring. Then is a domain if and only if is a domain.   "
},
{
  "id": "ssec_polynomialRingAreDomains-4",
  "level": "2",
  "url": "sec_integralDomains.html#ssec_polynomialRingAreDomains-4",
  "type": "Proof",
  "number": "2.3.3.1",
  "title": "",
  "body": " For the forward direction, suppose that is a domain. Let and be nonzero polynomials in , where . Then the lowest-degree term in is . Since is a domain, , and thus is not the zero polynomial. Thus has no zero-divisors. Since is commutative, so is by . Thus is a domain as well.  For the reverse direction, suppose that is a domain. Then can be viewed as a subring of via constant polynomials. By , is a domain as well.  "
},
{
  "id": "ssec_polynomialRingAreDomains-5",
  "level": "2",
  "url": "sec_integralDomains.html#ssec_polynomialRingAreDomains-5",
  "type": "Investigation",
  "number": "2.3.5",
  "title": "",
  "body": "  Is the converse of Theorem true? If so, give a short proof. If not, find a counterexample.    Yes. Apply Theorem .   "
},
{
  "id": "ssec_polynomialRingAreDomains-7",
  "level": "2",
  "url": "sec_integralDomains.html#ssec_polynomialRingAreDomains-7",
  "type": "Corollary",
  "number": "2.3.10",
  "title": "",
  "body": "  Given a field , the set of polynomials is a domain.   "
},
{
  "id": "thm_degreeOfProductInDomain",
  "level": "2",
  "url": "sec_integralDomains.html#thm_degreeOfProductInDomain",
  "type": "Theorem",
  "number": "2.3.11",
  "title": "",
  "body": "  Let be a domain, and let be nonzero polynomials. Then .    Let the leading term of be and the leading term of be . Then the leading term of is . (Observe that since is a domain, .) Thus, .   "
},
{
  "id": "ssec_polynomialRingAreDomains-10",
  "level": "2",
  "url": "sec_integralDomains.html#ssec_polynomialRingAreDomains-10",
  "type": "Exploration",
  "number": "2.3.6",
  "title": "",
  "body": "  Can the hypotheses of be relaxed? If so, provide more general hypotheses and adapt the proof. If not, give an illustrative example.    If we were to relax the property of a domain we have two choices: relax commutativity or relax zero-divisors. Relaxing commutativity means we are allowing for non-commutative coefficient rings, such as . Relaxing zero-divisors means allowing fro zero-divisors.  If we allow for zero-divisors, then the theorem fails: Let . Observe that , but has degree 1. This is because the leading coefficients are zero-divisors.  If we allow for non-commutative rings without zero-divisors (we have not encountered any of these yet), then the theorem remains true. Indeed, the leading coefficient of the product is the product of the leading coefficients. Since our ring has no zero-divisors, the same proof works!   "
},
{
  "id": "ssec_polynomialRingAreDomains-11",
  "level": "2",
  "url": "sec_integralDomains.html#ssec_polynomialRingAreDomains-11",
  "type": "Investigation",
  "number": "2.3.7",
  "title": "",
  "body": "  Let be a domain. What are the units of ? Prove your answer.    The units are . Clearly, .  Suppose such that . Then . Thus , and consequently, .   "
},
{
  "id": "exers_integralDomains-1",
  "level": "2",
  "url": "sec_integralDomains.html#exers_integralDomains-1",
  "type": "Exercise",
  "number": "2.3.4.1",
  "title": "",
  "body": " Mark the following as true or false.    All fields are integral domains.    All rings are domains.    All domains are fields    All integral domains are rings    All integral domains are commutative.    In an integral domain, there are no zero divisors.     is an integral domain.     is an integral domain.     is an integral domain     is a domain.    "
},
{
  "id": "exers_integralDomains-2",
  "level": "2",
  "url": "sec_integralDomains.html#exers_integralDomains-2",
  "type": "Exercise",
  "number": "2.3.4.2",
  "title": "",
  "body": " Prove that the are a domain.  "
},
{
  "id": "exers_integralDomains-3",
  "level": "2",
  "url": "sec_integralDomains.html#exers_integralDomains-3",
  "type": "Exercise",
  "number": "2.3.4.3",
  "title": "",
  "body": " Find all the units in the Gaussian Integers. THat is, compute .  "
},
{
  "id": "exers_integralDomains-4",
  "level": "2",
  "url": "sec_integralDomains.html#exers_integralDomains-4",
  "type": "Exercise",
  "number": "2.3.4.4",
  "title": "",
  "body": " Square matrices over a ring are never an integral domain (unless the coefficient rings is and ). Prove for a general ring that is not a domain for .  "
},
{
  "id": "exers_integralDomains-5",
  "level": "2",
  "url": "sec_integralDomains.html#exers_integralDomains-5",
  "type": "Exercise",
  "number": "2.3.4.5",
  "title": "",
  "body": " The is a convenient way to test if a subring is a ring. Formulate and prove a sub-domain test.  "
},
{
  "id": "exers_integralDomains-6",
  "level": "2",
  "url": "sec_integralDomains.html#exers_integralDomains-6",
  "type": "Exercise",
  "number": "2.3.4.6",
  "title": "",
  "body": " In the Gaussian Integers, we can factor in at least two ways: Clearly and . Use the definition of units and associates to explain what is happening here.  "
},
{
  "id": "exers_integralDomains-7",
  "level": "2",
  "url": "sec_integralDomains.html#exers_integralDomains-7",
  "type": "Exercise",
  "number": "2.3.4.7",
  "title": "",
  "body": " Verify that is a subring of . Is it a sub-domain?  "
},
{
  "id": "exers_integralDomains-8",
  "level": "2",
  "url": "sec_integralDomains.html#exers_integralDomains-8",
  "type": "Exercise",
  "number": "2.3.4.8",
  "title": "",
  "body": " Verify that is a subring of . Is it a sub-domain?  "
},
{
  "id": "exers_integralDomains-9",
  "level": "2",
  "url": "sec_integralDomains.html#exers_integralDomains-9",
  "type": "Exercise",
  "number": "2.3.4.9",
  "title": "",
  "body": " Prove that any subring of an integral domain is an integral domain.  "
},
{
  "id": "exer_nilpotent",
  "level": "2",
  "url": "sec_integralDomains.html#exer_nilpotent",
  "type": "Exercise",
  "number": "2.3.4.10",
  "title": "Nilpotent Elements.",
  "body": "Nilpotent Elements Nilpotent Elements  An element is called nilpotent if there exists such that .    Verify that is a nilpotent element (of whatever coefficient ring you want).    Verify that is a nilpotent element of .    Prove that a non-zero nilpotent element is a zero-divisor.    Show that is a zero-divisor but not nilpotent. That is, the converse to the previous part is false in general.    "
},
{
  "id": "exers_integralDomains-11",
  "level": "2",
  "url": "sec_integralDomains.html#exers_integralDomains-11",
  "type": "Exercise",
  "number": "2.3.4.11",
  "title": "",
  "body": " Prove that if is nilpotent, then .  "
},
{
  "id": "sec_divisibilityIntegralDomains",
  "level": "1",
  "url": "sec_divisibilityIntegralDomains.html",
  "type": "Section",
  "number": "2.4",
  "title": "Divisibility in Integral Domains",
  "body": " Divisibility in Integral Domains   Guiding Questions   In this section, we'll seek to answer the questions:    What multiplicative properties can we generalize from to any integral domain?  What are the differences between a prime and irreducible element in a commutative ring?     When we introduced the notion of integral domain, we said that part of the reason for the definition was to capture some of the most essential properties of the integers. This is the heart of abstraction and generalization in mathematics: to distill the important properties of our objects of interest and explore the consequences of those properties. One such important property of is cancellation .    Divisibility in Domains   Cancellation Law   Let be a commutative ring. Then is a domain if and only if for all with and , we have .     Assume is a domain and . Then , so . Since is a domain, it has no zero divisors, and therefore either or . The first possibility cannot happen as . We therefore must have , or .  Conversely, by contrapositive, assume that is not a domain. Let be a zero divisor; then there is a nonzero such that . Since as zero-divisors are non-zero, this implies that as we can cancel the 's, a contradiction.   We may read as saying that the defining property of an integral domain is the ability to cancel common nonzero factors. Note that we have not divided ; division is not a binary operation, and nonzero elements of rings need not be units. However, as was the case in , there are notions of divisibility and factorization in rings.   divides (ring)  factor (ring)   Let be a commutative ring, and let . We say  divides  and write if there is a such that . We then say that is a factor of .      Find all factors of in the following rings:         In , every non-zero element is a unit. Thus any element is a factor of as . This is a general property: units are always factors of every element.  In , the factors of are as .      Prime and Irreducible Elements  Our definition of prime also extends nicely to commutative rings. Indeed, the desire to extend the familiar notion of prime from to any ring is the reason for our less-familiar definition given in .   prime (ring element)   Let be a commutative ring. We say a nonzero nonunit element is prime if whenever for some , either or .    A notion related to primality is irreducibility. In fact, one might reasonably say that irreducibility is the natural generalization of the typical definition of prime one encounters in school mathematics. However, we will see that the notions differ in general.   irreducible (ring element)  atom   Let be a commutative ring. We say a nonzero nonunit element is irreducible if whenever for some , one of or is a unit. (Note that in some areas of the literature, the word atom is used interchangeably with irreducible.)      Find the units, primes, and irreducibles in the following rings.          TBD.    In domains, all primes are irreducible.    Let be a domain. If is prime, then is irreducible.     Compare to the proof of Theorem .  Let be prime, and suppose that for some . We show that either or is a unit.  Since , we have . By definition either or . Without loss of generality, assume . Then there is a such that , so , and we use the Cancellation Law to cancel to obtain . Thus, is a unit, making irreducible.   In familiar settings, the notion of prime and irreducible exactly coincide.    Every irreducible in is prime.     Let be irreducible, and suppose that . Then . Since is irreducible, either or is a unit. However, the only units are , so either one of or is or . In either case, is prime.   Despite their overlap in familiar settings, primes and irreducibles are distinct types of elements. As the next exploration demonstrates, not all primes are irreducible. What is more, will show that not all irreducibles are primes, even in domains!    Find an example of a ring and prime such that is not irreducible.    In , is prime by but not irreducible as and is not a unit.      Consider the set of all polynomials in for which the coefficient on the linear term is zero. That is, .  (You should convince yourself that is an integral domain, but do not need to prove it.) Then, find a polynomial of the form in that is irreducible, but not prime.    Consider . Then is irreducible, as it cannot be factored into a product of linear polynomials (there aren't any in ), so any factorization of is degree 2 times degree 0. Then the leading coefficients must be units, i.e., both 1 or both .  However, is not prime, as but .      Greatest Common Divisors  Our last straightforward generalization from the multiplicative structure of is the notion of greatest common divisor. As our next definition again demonstrates, our careful work in the context of generalizes nicely to all domains. Indeed, we intentionally did not appeal to to define the greatest common divisor in , as not all rings have a natural order relation like does.   greatest common divisor (integral domain)   Let be a domain, and let . A nonzero element is a greatest common divisor of and if    and and,    if with and , then .         Let be a domain and and suppose is a greatest common divisor of and . Then any associate of is also a greatest common divisor of and . (Recall .)     Let be a gcd of and , let , and . We claim is also a gcd of and .  Since and there are such that and . Then and , so and .  Let be a common divisor of and . Since is a gcd, , i.e., . Then , so .  Thus, is a gcd of and .     In most familiar domains, GCDs exist. However, they don't always! Find an example of elements in the ring from Exercise which do not have a GCD. Justify your assertion.    Consider and . First note that is not a common divisor in .  Both and are divisible by and in . However, neither can be the gcd, as and .      Polynomial Euclidean Algorithm  We now specialize divisibility to polynomial rings over a field and recover many of the results we have for divisibility in .   Polynomial Division Algorithm   Let be a field and with . Then there exist unique such that , where .      Existence: If , then and will do. If and , then and will suffice. Thus, we need only consider the case in which and . We use induction on .  When , , and as , both and are nonzero constants. Then and will work.  Now assume and exist whenever . Assume and write and . Use Lemma and set , which must have degree less than . Thus, by induction, there exist such that , with or .  We therefore have , where and have the desired properties.   Uniqueness: Suppose and , where both have the desired properties. Then , or . Thus either , or has degree at least . The latter is clearly impossible, so and .   The division algorithm was the crucial ingredient for the Euclidean algorithm.   Polynomial Euclidean Algorithm   Let be a field and two polynomials (not both zero). To compute construct a sequence of remainders initializing and . Set then:   Use the to divide by with new remainder : where .    If , then . STOP.    Increment by to and return to the first step.       The Euclidean algorithm always terminates in finitely many steps as the degree of the remainders is strictly decreasing and bounded below by . In particular, the process will terminate in at most steps. In each instance, we are simple dividing the previous remainder by the next to get our new remainder. We will refer to this as repeated division .    Consider and viewed as polynomials over the field of rational numbers. Carry out repeated division: and so . But since greatest common divisors are only unique up to units, we say by multiplying through by .    The previous example shows that in polynomials over a field we can always multiply through by an appropriate constant so that the greatest common divisor is monic .    Let be polynomials over a field, not both zero. The greatest common divisor is the monic polynomial which is a greatest common divisor of .    Since greatest common divisors are all associates, once we require that they are monic the gcd becomes unique.    Let be two monic greatest common divisors of where is a field. Then .    Since are both greatest common divisors, and . In particular, this only happens when for some . Since they are both monic, it must be that .     Due to Bill Cook: https:\/\/www.billcookmath.com\/sage\/algebra\/Euclidean_algorithm-poly.html     Consider the polynomials and . We compute their gcd using repeated division:   The Euclidean Algorithm tells us a greatest common divisor is . Multiplying by we have In particular, these polynomials are relatively prime.    The last result is a polynomial generalization of Bezout's identity.   Polynomial Bézout's Identity  Bézout's Identity (polynomials)   Let be a field. For any polynomials not both 0, there are polynomials and such that .    The Euclidean algorithm computes the greatest common divisor of . After running the Euclidean Algorithm, we have a sequence of remainders and quotients and , respectively. Here and : where .  Solving this system of equations for the remainders we get: Now substitute from the second to last equation into the last equation: and in particular we have expressed as a polynomial combination of and .  Into this equation substitute in , which is a polynomial combination of and . This will express as a polynomial combination of and . And keep doing so until we have arrived at This completes the proof.     Bézout Coefficients over   Let's consider the polynomials and as polynomials in . Carrying out repeated division: and so .  To find Béout coefficients, we solve for the remainders: and substitute into the last equation: note that in we have .  We now substitute into this equation: and we have found our Bézout coefficients.      Let's use the same polynomials: and but work over instead. Carrying out repeated division yields: and we will stop here because we have a constant remainder. This means that in we have:   Solving our equations for the remainders yields: and so we substitute the first equation into the second: noting that and in .  Notice here that the coefficients are different in degrees than the previous example.       Mark the following as true or false.    In a domain, the cancellation law holds.    In a ring, the cancellation law holds.    In a , the cancellation law holds.     is a factor of in .     is a factor of in .     is a prime element of .     is a prime element of .    In a domain, the greatest common divisor of two non-zero elements is unique.    In a domain, the greatest common divisor of two non-zero elements is unique up to associates.    A domain is a commutative ring where the cancellation law holds.    If is a zero-divisor in a commutative ring, then is a factor of .    In a domain every irreducible element is prime.      Find two factorizations of into products of prime elements. Why does this not contradict the ?    Let's investigate prime and irreducible elements of the .    Prove that is a prime element.    Prove that is a prime element.      Consider the polynomial ring over .    Show that is irreducible.    Show that is not irreducible.    Show that is irreducible.      Consider the polynomial ring over . Which of the following polynomials are irreducible?                          Another interesting example where irreducibles need not be prime are in the ring . We will revisit this idea in Section ????    Define a norm on , i.e. by Prove that is multiplicative, i.e. .    Verify that in we have the equality .    Use the norm to prove that does not divide nor does it divide . In particular, this tells us is not a prime element.    Use the norm to prove that is irreducible.      Suppose that are non-zero polynomials over a field such that and . Prove that there exists such that .    Compute the greatest common divisors of the following polynomials over the given field.     and over      and over      and over      and over       Compute Bézout coefficients for each of the pairs of polynomials in the previous exercise.    "
},
{
  "id": "obj_divisibilityIntegralDomains",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#obj_divisibilityIntegralDomains",
  "type": "Guiding Questions",
  "number": "2.4",
  "title": "Guiding Questions",
  "body": " Guiding Questions   In this section, we'll seek to answer the questions:    What multiplicative properties can we generalize from to any integral domain?  What are the differences between a prime and irreducible element in a commutative ring?   "
},
{
  "id": "thm_domainCancellationLaw",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#thm_domainCancellationLaw",
  "type": "Theorem",
  "number": "2.4.1",
  "title": "Cancellation Law.",
  "body": " Cancellation Law   Let be a commutative ring. Then is a domain if and only if for all with and , we have .   "
},
{
  "id": "ssec_divisibilityInDomains-3",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#ssec_divisibilityInDomains-3",
  "type": "Proof",
  "number": "2.4.1.1",
  "title": "",
  "body": " Assume is a domain and . Then , so . Since is a domain, it has no zero divisors, and therefore either or . The first possibility cannot happen as . We therefore must have , or .  Conversely, by contrapositive, assume that is not a domain. Let be a zero divisor; then there is a nonzero such that . Since as zero-divisors are non-zero, this implies that as we can cancel the 's, a contradiction.  "
},
{
  "id": "def_divisibilityRings",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#def_divisibilityRings",
  "type": "Definition",
  "number": "2.4.2",
  "title": "",
  "body": " divides (ring)  factor (ring)   Let be a commutative ring, and let . We say  divides  and write if there is a such that . We then say that is a factor of .   "
},
{
  "id": "ssec_divisibilityInDomains-6",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#ssec_divisibilityInDomains-6",
  "type": "Investigation",
  "number": "2.4.1",
  "title": "",
  "body": "  Find all factors of in the following rings:         In , every non-zero element is a unit. Thus any element is a factor of as . This is a general property: units are always factors of every element.  In , the factors of are as .   "
},
{
  "id": "def_primeElementsRings",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#def_primeElementsRings",
  "type": "Definition",
  "number": "2.4.3",
  "title": "",
  "body": " prime (ring element)   Let be a commutative ring. We say a nonzero nonunit element is prime if whenever for some , either or .   "
},
{
  "id": "def_irreducibleelement",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#def_irreducibleelement",
  "type": "Definition",
  "number": "2.4.4",
  "title": "",
  "body": " irreducible (ring element)  atom   Let be a commutative ring. We say a nonzero nonunit element is irreducible if whenever for some , one of or is a unit. (Note that in some areas of the literature, the word atom is used interchangeably with irreducible.)   "
},
{
  "id": "expl-unit-prime-irred",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#expl-unit-prime-irred",
  "type": "Exploration",
  "number": "2.4.2",
  "title": "",
  "body": "  Find the units, primes, and irreducibles in the following rings.          TBD.   "
},
{
  "id": "thm_primesAreIrreducibleInDomains",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#thm_primesAreIrreducibleInDomains",
  "type": "Theorem",
  "number": "2.4.5",
  "title": "",
  "body": "  Let be a domain. If is prime, then is irreducible.   "
},
{
  "id": "subsec-primeAndIrreducibleElements-9",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#subsec-primeAndIrreducibleElements-9",
  "type": "Proof",
  "number": "2.4.2.1",
  "title": "",
  "body": " Compare to the proof of Theorem .  Let be prime, and suppose that for some . We show that either or is a unit.  Since , we have . By definition either or . Without loss of generality, assume . Then there is a such that , so , and we use the Cancellation Law to cancel to obtain . Thus, is a unit, making irreducible.  "
},
{
  "id": "thm_irreducibleIsPrimeInZ",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#thm_irreducibleIsPrimeInZ",
  "type": "Theorem",
  "number": "2.4.6",
  "title": "",
  "body": "  Every irreducible in is prime.   "
},
{
  "id": "subsec-primeAndIrreducibleElements-12",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#subsec-primeAndIrreducibleElements-12",
  "type": "Proof",
  "number": "2.4.2.2",
  "title": "",
  "body": " Let be irreducible, and suppose that . Then . Since is irreducible, either or is a unit. However, the only units are , so either one of or is or . In either case, is prime.  "
},
{
  "id": "expl_primeNotIrreducible",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#expl_primeNotIrreducible",
  "type": "Exploration",
  "number": "2.4.3",
  "title": "",
  "body": "  Find an example of a ring and prime such that is not irreducible.    In , is prime by but not irreducible as and is not a unit.   "
},
{
  "id": "exer_irreducibleNotPrime",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#exer_irreducibleNotPrime",
  "type": "Exploration",
  "number": "2.4.4",
  "title": "",
  "body": "  Consider the set of all polynomials in for which the coefficient on the linear term is zero. That is, .  (You should convince yourself that is an integral domain, but do not need to prove it.) Then, find a polynomial of the form in that is irreducible, but not prime.    Consider . Then is irreducible, as it cannot be factored into a product of linear polynomials (there aren't any in ), so any factorization of is degree 2 times degree 0. Then the leading coefficients must be units, i.e., both 1 or both .  However, is not prime, as but .   "
},
{
  "id": "def_gcdDomain",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#def_gcdDomain",
  "type": "Definition",
  "number": "2.4.7",
  "title": "",
  "body": " greatest common divisor (integral domain)   Let be a domain, and let . A nonzero element is a greatest common divisor of and if    and and,    if with and , then .      "
},
{
  "id": "ssec_greatestCommonDivisors-4",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#ssec_greatestCommonDivisors-4",
  "type": "Theorem",
  "number": "2.4.8",
  "title": "",
  "body": "  Let be a domain and and suppose is a greatest common divisor of and . Then any associate of is also a greatest common divisor of and . (Recall .)   "
},
{
  "id": "ssec_greatestCommonDivisors-5",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#ssec_greatestCommonDivisors-5",
  "type": "Proof",
  "number": "2.4.3.1",
  "title": "",
  "body": " Let be a gcd of and , let , and . We claim is also a gcd of and .  Since and there are such that and . Then and , so and .  Let be a common divisor of and . Since is a gcd, , i.e., . Then , so .  Thus, is a gcd of and .  "
},
{
  "id": "ssec_greatestCommonDivisors-6",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#ssec_greatestCommonDivisors-6",
  "type": "Exploration",
  "number": "2.4.5",
  "title": "",
  "body": "  In most familiar domains, GCDs exist. However, they don't always! Find an example of elements in the ring from Exercise which do not have a GCD. Justify your assertion.    Consider and . First note that is not a common divisor in .  Both and are divisible by and in . However, neither can be the gcd, as and .   "
},
{
  "id": "theorem_polynomialDivisionAlgorithm",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#theorem_polynomialDivisionAlgorithm",
  "type": "Theorem",
  "number": "2.4.9",
  "title": "Polynomial Division Algorithm.",
  "body": " Polynomial Division Algorithm   Let be a field and with . Then there exist unique such that , where .   "
},
{
  "id": "ssec_polynomialEuclideanAlgorithm-4",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#ssec_polynomialEuclideanAlgorithm-4",
  "type": "Proof",
  "number": "2.4.4.1",
  "title": "",
  "body": "  Existence: If , then and will do. If and , then and will suffice. Thus, we need only consider the case in which and . We use induction on .  When , , and as , both and are nonzero constants. Then and will work.  Now assume and exist whenever . Assume and write and . Use Lemma and set , which must have degree less than . Thus, by induction, there exist such that , with or .  We therefore have , where and have the desired properties.   Uniqueness: Suppose and , where both have the desired properties. Then , or . Thus either , or has degree at least . The latter is clearly impossible, so and .  "
},
{
  "id": "alg_euclideanAlgorithmPolynomials",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#alg_euclideanAlgorithmPolynomials",
  "type": "Algorithm",
  "number": "2.4.10",
  "title": "Polynomial Euclidean Algorithm.",
  "body": " Polynomial Euclidean Algorithm   Let be a field and two polynomials (not both zero). To compute construct a sequence of remainders initializing and . Set then:   Use the to divide by with new remainder : where .    If , then . STOP.    Increment by to and return to the first step.      "
},
{
  "id": "ssec_polynomialEuclideanAlgorithm-8",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#ssec_polynomialEuclideanAlgorithm-8",
  "type": "Example",
  "number": "2.4.11",
  "title": "",
  "body": "  Consider and viewed as polynomials over the field of rational numbers. Carry out repeated division: and so . But since greatest common divisors are only unique up to units, we say by multiplying through by .   "
},
{
  "id": "ssec_polynomialEuclideanAlgorithm-10",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#ssec_polynomialEuclideanAlgorithm-10",
  "type": "Definition",
  "number": "2.4.12",
  "title": "",
  "body": "  Let be polynomials over a field, not both zero. The greatest common divisor is the monic polynomial which is a greatest common divisor of .   "
},
{
  "id": "ssec_polynomialEuclideanAlgorithm-12",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#ssec_polynomialEuclideanAlgorithm-12",
  "type": "Lemma",
  "number": "2.4.13",
  "title": "",
  "body": "  Let be two monic greatest common divisors of where is a field. Then .    Since are both greatest common divisors, and . In particular, this only happens when for some . Since they are both monic, it must be that .   "
},
{
  "id": "ssec_polynomialEuclideanAlgorithm-14",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#ssec_polynomialEuclideanAlgorithm-14",
  "type": "Example",
  "number": "2.4.14",
  "title": "",
  "body": "  Consider the polynomials and . We compute their gcd using repeated division:   The Euclidean Algorithm tells us a greatest common divisor is . Multiplying by we have In particular, these polynomials are relatively prime.   "
},
{
  "id": "thm_polynomialBezoutIdentity",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#thm_polynomialBezoutIdentity",
  "type": "Theorem",
  "number": "2.4.15",
  "title": "Polynomial Bézout’s Identity.",
  "body": " Polynomial Bézout's Identity  Bézout's Identity (polynomials)   Let be a field. For any polynomials not both 0, there are polynomials and such that .    The Euclidean algorithm computes the greatest common divisor of . After running the Euclidean Algorithm, we have a sequence of remainders and quotients and , respectively. Here and : where .  Solving this system of equations for the remainders we get: Now substitute from the second to last equation into the last equation: and in particular we have expressed as a polynomial combination of and .  Into this equation substitute in , which is a polynomial combination of and . This will express as a polynomial combination of and . And keep doing so until we have arrived at This completes the proof.   "
},
{
  "id": "ssec_polynomialEuclideanAlgorithm-17",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#ssec_polynomialEuclideanAlgorithm-17",
  "type": "Example",
  "number": "2.4.16",
  "title": "Bézout Coefficients over <span class=\"process-math\">\\(\\mathbb{F}_2\\)<\/span>.",
  "body": " Bézout Coefficients over   Let's consider the polynomials and as polynomials in . Carrying out repeated division: and so .  To find Béout coefficients, we solve for the remainders: and substitute into the last equation: note that in we have .  We now substitute into this equation: and we have found our Bézout coefficients.   "
},
{
  "id": "ssec_polynomialEuclideanAlgorithm-18",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#ssec_polynomialEuclideanAlgorithm-18",
  "type": "Example",
  "number": "2.4.17",
  "title": "",
  "body": "  Let's use the same polynomials: and but work over instead. Carrying out repeated division yields: and we will stop here because we have a constant remainder. This means that in we have:   Solving our equations for the remainders yields: and so we substitute the first equation into the second: noting that and in .  Notice here that the coefficients are different in degrees than the previous example.   "
},
{
  "id": "exers_divisibilityIntegralDomains-1",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#exers_divisibilityIntegralDomains-1",
  "type": "Exercise",
  "number": "2.4.5.1",
  "title": "",
  "body": " Mark the following as true or false.    In a domain, the cancellation law holds.    In a ring, the cancellation law holds.    In a , the cancellation law holds.     is a factor of in .     is a factor of in .     is a prime element of .     is a prime element of .    In a domain, the greatest common divisor of two non-zero elements is unique.    In a domain, the greatest common divisor of two non-zero elements is unique up to associates.    A domain is a commutative ring where the cancellation law holds.    If is a zero-divisor in a commutative ring, then is a factor of .    In a domain every irreducible element is prime.    "
},
{
  "id": "exers_divisibilityIntegralDomains-2",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#exers_divisibilityIntegralDomains-2",
  "type": "Exercise",
  "number": "2.4.5.2",
  "title": "",
  "body": " Find two factorizations of into products of prime elements. Why does this not contradict the ?  "
},
{
  "id": "exers_divisibilityIntegralDomains-3",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#exers_divisibilityIntegralDomains-3",
  "type": "Exercise",
  "number": "2.4.5.3",
  "title": "",
  "body": " Let's investigate prime and irreducible elements of the .    Prove that is a prime element.    Prove that is a prime element.    "
},
{
  "id": "exers_divisibilityIntegralDomains-4",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#exers_divisibilityIntegralDomains-4",
  "type": "Exercise",
  "number": "2.4.5.4",
  "title": "",
  "body": " Consider the polynomial ring over .    Show that is irreducible.    Show that is not irreducible.    Show that is irreducible.    "
},
{
  "id": "exers_divisibilityIntegralDomains-5",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#exers_divisibilityIntegralDomains-5",
  "type": "Exercise",
  "number": "2.4.5.5",
  "title": "",
  "body": " Consider the polynomial ring over . Which of the following polynomials are irreducible?                        "
},
{
  "id": "exers_divisibilityIntegralDomains-6",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#exers_divisibilityIntegralDomains-6",
  "type": "Exercise",
  "number": "2.4.5.6",
  "title": "",
  "body": " Another interesting example where irreducibles need not be prime are in the ring . We will revisit this idea in Section ????    Define a norm on , i.e. by Prove that is multiplicative, i.e. .    Verify that in we have the equality .    Use the norm to prove that does not divide nor does it divide . In particular, this tells us is not a prime element.    Use the norm to prove that is irreducible.    "
},
{
  "id": "exers_divisibilityIntegralDomains-7",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#exers_divisibilityIntegralDomains-7",
  "type": "Exercise",
  "number": "2.4.5.7",
  "title": "",
  "body": " Suppose that are non-zero polynomials over a field such that and . Prove that there exists such that .  "
},
{
  "id": "exers_divisibilityIntegralDomains-8",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#exers_divisibilityIntegralDomains-8",
  "type": "Exercise",
  "number": "2.4.5.8",
  "title": "",
  "body": " Compute the greatest common divisors of the following polynomials over the given field.     and over      and over      and over      and over     "
},
{
  "id": "exers_divisibilityIntegralDomains-9",
  "level": "2",
  "url": "sec_divisibilityIntegralDomains.html#exers_divisibilityIntegralDomains-9",
  "type": "Exercise",
  "number": "2.4.5.9",
  "title": "",
  "body": " Compute Bézout coefficients for each of the pairs of polynomials in the previous exercise.  "
},
{
  "id": "sec_homomorphisms",
  "level": "1",
  "url": "sec_homomorphisms.html",
  "type": "Section",
  "number": "3.1",
  "title": "Homomorphisms",
  "body": " Homomorphisms   Guiding Questions   In this section, we'll seek to answer the questions:    What is a ring homomorphism?  What are some examples of ring homomorphisms?  What is the kernel and image of a homomorphism?  What are the initial and terminal rings?     Central to modern mathematics is the notion of function . This section assumes a familiarity with the idea of function from a set-theoretic point of view, as well as the concepts of injective (one-to-one), surjective (onto), and bijective functions (one-to-one correspondences). . Functions arise in all areas of mathematics, each subdiscipline concerned with certain types of functions. In algebra, our concern is with operation-preserving functions, such as the linear transformations of vector spaces you have seen in a course in linear algebra. Those linear transformations had the properties that (addition is preserved) and (scalar multiplication is preserved).    Homomorphisms  We find something similar at work in the study of homomorphisms of rings, which we define to be functions that preserve both addition and multiplication.   homomorphism  monomorphism  epimorphism  isomorphism  automorphism   Let and be rings. A function is called a ring homomorphism if it preserves addition, multiplication, and sends the identity of to the identity of . That is, for all :  ,  , and  .  If is injective (one-to-one), we say that is a monomorphism . If is surjective (onto), we say that is an epimorphism . If is a bijection (both injective and surjective), we say that is an isomorphism and write . If is an isomorphism, we say is an automorphism of .    Our first job when glimpsing a new concept is to collect a stock of examples.    Determine whether the following functions are homomorphisms, monomorphisms, epimorphisms, isomorphisms, automorphisms, or none of these. Note that denotes an arbitrary ring and a field.   defined by  defined by  defined by  defined by  defined by , where  defined by  defined by , where if , is the expression obtained by plugging into : (this is known as the -evaluation map)  defined by      defined by is called the identity mapping . We in particular have: , , and The identity mapping satisfies the criteria for being a ring homomorphism. It is an automorphism.   defined by is the negation mapping. Although it is true that it fails the other two properties of a ring homorphism in general (sometimes not though!). Namely, for a general ring so that and also but . In general, so is not compatible with multiplication or unity. However, sometimes is true for every element of the ring, particularly Boolean rings. Examples include .   defined by , or the multiplication by map. The map does not preserve the unity nor does it preserve multiplication. Check! It is not a ring homomorphism.   defined by is sometimes called the Frobenius mapping. It is in fact a ring homomorphism in this case. For the unity and multiplicative compatibility we have and . For compatibility with addition we remind the reader that : It is not an automorphism; however, it is a homomorphism. Homomorphisms from a ring to itself are called endomorphisms .   defined by , where TBD   defined by TBD   defined by , where if , is the expression obtained by plugging into : (this is known as the -evaluation map) TBD   defined by TBD.      Ferdinand Georg Frobenius     Portrait of Ferdinand Georg Frobenius   Ferdinand Georg Frobenius, a student of Weierstrass, (1849-1917) was a German mathematician known for contributions to number theory, group theory, differential equations, and elliptic functions.    The Frobenius Homomorphism  Frobenius Homomorphism   The Frobenius Homomorphism (or just Frobenius) is a homomorphism that exists whenever we are working with a prime. In this example, we look at the Frobenius on a polynomial ring.  Let be a prime. Consider the function: defined by .  Before we prove that the Frobenius is a homomorphism, let's recall that whenever the binomial coefficient is divisible by . Indeed, using the usual formula: All of the terms in the denominator are strictly less than provided . Thus there is no term in the denominator that will cancel the in the numerator. In particular, the binomial coefficients are in whenever .  With that done, let's show is a homomorphism. It preserves unity: .  For compatibility with addition, suppose : as the cross terms are zero.  For compatibility with multiplication: We conclude that the Frobenius is a homomorphism.  The following checks will be left as an exercise: The Frobenius is a monomorphism, it is not an epimorphism, and hence not an automorphism.     Parsons Problem, Mathematical Proof even numbers  Create a proof of the theorem: All automorphisms are monomorphisms.    Let be an automorphism.     Then is a prime number.    Then there exists an so that .    Then there exists an so that .     Click the heels of your ruby slippers together three times.    So .  This is a superfluous second paragraph in this block.    Thus .    And a little bit of irrelevant multi-line math .    Dorothy will not be much help with this proof.     Properties of Homomorphisms  The sequence of results that follows shows that homomorphisms preserve several of our ring-theoretic notions. This means is the right definition. That is, of all the possible functions between rings we isolated a good class to call structure preserving. We begin by showing that homomorphisms preserve the additive identity.    Suppose is a ring homomorphism. Then .    Supppose is a ring homomorphism. Note that and in particular this tells us as desired.    We now show that homomorphisms preserve units.    Suppose is a ring homomorphism. If , then .    Suppose is a ring homomorphism and . Then there exists with . We compute: and hence .    Since homomorphisms are compatible with multiplication, and powers of elements are defined with multiplication, they must preserve powers as the next theorem shows.    Suppose is a ring homomorphism. For any and , we have in .    Suppose is a ring homomorphism and . We now proceed by induction. The base case is which certainly true.  For the inductive step, suppose that . We show : as desired. This equality completes the proof.      Kernel of a Homomorphism  Homomorphisms give rise to a particularly important class of subsets: kernels.   kernel   Let be a ring homomorphism. Then is the kernel of .    Note that by we know always. In particular, the kernel of a ring homomorphism is always a non-empty subset.    For each homomorphism in , find (with justification), the kernel.   TBD    Kernels are a fundamental structure when studying rings. As a first glimpse of their importance, we show that they give a useful way of determining whether their defining homomorphisms are monomorphisms.    Let be a homomorphism. Then is a monomorphism if and only if .     Supppose is a monomomorphism. Since is a homomorphism we know . Suppose now that so that . Since is injective and , we conclude that . In particular, .  For the converse, suppose that . Suppose are such that . Then we have: and so . Since the only element here is , we conclude that or that . Thus is a monomorphism.   A nice application of this theorem is the following result that shows that homomorphisms from a field are always monomorphisms. They will never fail to be injective!    Suppose is a ring homomorphism where is a field. Then is a monomorphism.     Suppose is a ring homomorphism where is a field. We show is a monomorphism by applying . Suppose that there is , with . If , then there is a unit. By , is also a unit and in particular is not . Thus the only element of is .     Image of a Homomorphism  The image of a homomorphism is just different terminology for the range. One reason to use different language is that we will see the image is not just a subset of , it is a subring of !    Suppose , the image of the , denoted is the range of :       Compute the image of the homomorphisms .    Before we prove that the image of a homomorphism is a subring, let's note that homomorphisms preserve most ring-axioms. In particular, we have defined subtraction of two ring elements as , where is the additive inverse of . In you will prove that homorphisms preserve additive inverses, namely: . In particular,     Suppose is a homomorphism. Then is a subring of .    Since , we know that . We just need to show it is closed under subtraction and multiplication:  For subtraction, take . Then   For multiplication, we have We conclude that is a subring of .      The Initial Ring   Initial Ring We now return to and investigate homomorphisms , where is an arbitrary ring. We will prove that there is one and only one homomorphism. This shows that is the initial ring . It is the unique ring (up to isomorphism) that has this property.     Action of Integers  Before we prove this, let's introduce some notation. Take a ring element . For we can define where the right hand sum has terms. Similarly, where the right hand sum has terms. And . We leave it to the reader to check that this is well-defined.    For any ring , there is a unique homomorphism .    Let be an arbitrary homomorphism. Since the image of unity is unity we have . Since the image of the additive identity is the additive identity, we have . By induction, we conclude that for any . Similarly for any .  Since was arbitrary, we have seen that any homomorphism is the homomorphism . This proves uniqueness.      The Terminal Ring   Terminal Ring In this last part of the section, we ask the question: Is there a ring such that for any ring , there exists one and only one homomorphism . That is to say, is there a ? One guess might be . It turns out this is not the case!    Verify the terminal ring, if it exists, cannot be . Do so by showing there is no homomorphism . What about ? Can it be terminal?    The right choice happens to be zero!    For any ring , there is one and only one homomorphism .    This is an exercise. There is only one set-theoretic mapping: the zero map. In this case, we just need to see that the zero map is a homomorphism. This is the case if and only if the codomain is .    We now have two very special rings: and . A natural question is to ask how they interact with each other. In particular, we know there exists a unique homomorphism . What about the other way around?    How many homomorphisms are there ?      Exercises   Mark the following as true or false.   Suppose are rings. Any function is a ring homomorphism.  The identity map on a ring is a ring homomorphism.  The zero map defined by is a ring homomorphism.  If is a ring homomorphism and is a field, then is a field.  If is a ring homomorphism and is a field, then is a field.  If is a ring homomorphism and is a finite ring, then is a finite ring.  If is a ring homomorphism and is a finite ring, then is a finite ring.  If is an injective ring homomorphism and is a finite ring, then is a finite ring.     Fix . Let be defined by . Prove that is a ring homomorphism. Then show that is neither injective nor surjective.    Define by . Prove that is an injective ring homomorphism.    Let be any ring and be the set of matries with entries in . Define by , where is the identity matrix. Prove that is an injective ring homomorphism.    Suppose is a commutative ring. Fix . Let be defined by . Prove that is a ring homomorphism. Is the evaluation homomorphism injective, surjective, and\/or bijective?    Gemini, Google's LLM, has claimed that for any ring , the trace map defined by where , is a ring homomorphism. This is true for exactly one . Find it, prove it is a homomorphism for that , then show it is not a homomorphism for any .    Consider the function defined by . Prove that this mapping is a homomorphism. Then show it is neither injective nor bijective. What is it's image?     Evaluation Homomorphism  Evaluation Homomorphism Evaluation Homomorphism  Let be a ring. Consider the polynomial ring over . For any , define the evaluation function: by . Prove that is always an epimorphism. That is, it is a homomorphism which is always surjective.  Why does this exercise not contradict the previous exercise?    Let be the Frobenius of . Show that is a monomorphism. Show it is not an epimorphism. Describe as a subring of .    Suppose is a homomorphism. Prove for all .    Let be the further reduce modulo three map. Show that is well-defined and an epimorphism. Then show that is not a zero-divisor. That is, homomorphisms need not preserve zero-divisors.    Let and be ring homomorphisms. Prove defined by is again a ring homomorphism.    Which of the properties one-to-one, onto, bijective are stable under composition of ring homomorphisms? That is, if both have one of these properties, must also have it?    Let is a homomorphism, prove that . That is, the additive inverse of the image is the image of the additive inverse.    Suppose is a ring satisfying the initial property: For all rings , there is a unique homomorphism . Prove is isomorphic to as follows.    Show that there are unique homomorphisms and     Use to prove that .    Use that satisfies the initial property to prove .    Deduce that . How might your proof change if you were to show that there is a unique terminal ring instead?      Prove that the zero map is a homomorphism if and only is the zero ring.    Revisiting upper triangular matrices from . Consider the projection onto the entry maps: defined by Prove that and are homomorphisms; however, and are not homomorphisms.   Matching Problem, Dates matching US dates  Match each type of (blank)-morphism with its definition    epimorphism  An onto homomorphism    monomorphism  An into homomorphism    isomorphism  An onto and into homomorphism    automorphism  An isomorphism where codomain is domain      "
},
{
  "id": "obj_homomorphisms",
  "level": "2",
  "url": "sec_homomorphisms.html#obj_homomorphisms",
  "type": "Guiding Questions",
  "number": "3.1",
  "title": "Guiding Questions",
  "body": " Guiding Questions   In this section, we'll seek to answer the questions:    What is a ring homomorphism?  What are some examples of ring homomorphisms?  What is the kernel and image of a homomorphism?  What are the initial and terminal rings?   "
},
{
  "id": "def_ringHomomorphism",
  "level": "2",
  "url": "sec_homomorphisms.html#def_ringHomomorphism",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": " homomorphism  monomorphism  epimorphism  isomorphism  automorphism   Let and be rings. A function is called a ring homomorphism if it preserves addition, multiplication, and sends the identity of to the identity of . That is, for all :  ,  , and  .  If is injective (one-to-one), we say that is a monomorphism . If is surjective (onto), we say that is an epimorphism . If is a bijection (both injective and surjective), we say that is an isomorphism and write . If is an isomorphism, we say is an automorphism of .   "
},
{
  "id": "expl-homomorphism-examples",
  "level": "2",
  "url": "sec_homomorphisms.html#expl-homomorphism-examples",
  "type": "Exploration",
  "number": "3.1.1",
  "title": "",
  "body": "  Determine whether the following functions are homomorphisms, monomorphisms, epimorphisms, isomorphisms, automorphisms, or none of these. Note that denotes an arbitrary ring and a field.   defined by  defined by  defined by  defined by  defined by , where  defined by  defined by , where if , is the expression obtained by plugging into : (this is known as the -evaluation map)  defined by      defined by is called the identity mapping . We in particular have: , , and The identity mapping satisfies the criteria for being a ring homomorphism. It is an automorphism.   defined by is the negation mapping. Although it is true that it fails the other two properties of a ring homorphism in general (sometimes not though!). Namely, for a general ring so that and also but . In general, so is not compatible with multiplication or unity. However, sometimes is true for every element of the ring, particularly Boolean rings. Examples include .   defined by , or the multiplication by map. The map does not preserve the unity nor does it preserve multiplication. Check! It is not a ring homomorphism.   defined by is sometimes called the Frobenius mapping. It is in fact a ring homomorphism in this case. For the unity and multiplicative compatibility we have and . For compatibility with addition we remind the reader that : It is not an automorphism; however, it is a homomorphism. Homomorphisms from a ring to itself are called endomorphisms .   defined by , where TBD   defined by TBD   defined by , where if , is the expression obtained by plugging into : (this is known as the -evaluation map) TBD   defined by TBD.    "
},
{
  "id": "subsec-homomorphisms-6-2-1",
  "level": "2",
  "url": "sec_homomorphisms.html#subsec-homomorphisms-6-2-1",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": "  Portrait of Ferdinand Georg Frobenius   "
},
{
  "id": "ex_frobeniusAffineLine",
  "level": "2",
  "url": "sec_homomorphisms.html#ex_frobeniusAffineLine",
  "type": "Example",
  "number": "3.1.3",
  "title": "The Frobenius Homomorphism.",
  "body": " The Frobenius Homomorphism  Frobenius Homomorphism   The Frobenius Homomorphism (or just Frobenius) is a homomorphism that exists whenever we are working with a prime. In this example, we look at the Frobenius on a polynomial ring.  Let be a prime. Consider the function: defined by .  Before we prove that the Frobenius is a homomorphism, let's recall that whenever the binomial coefficient is divisible by . Indeed, using the usual formula: All of the terms in the denominator are strictly less than provided . Thus there is no term in the denominator that will cancel the in the numerator. In particular, the binomial coefficients are in whenever .  With that done, let's show is a homomorphism. It preserves unity: .  For compatibility with addition, suppose : as the cross terms are zero.  For compatibility with multiplication: We conclude that the Frobenius is a homomorphism.  The following checks will be left as an exercise: The Frobenius is a monomorphism, it is not an epimorphism, and hence not an automorphism.   "
},
{
  "id": "number-theory-proof",
  "level": "2",
  "url": "sec_homomorphisms.html#number-theory-proof",
  "type": "Checkpoint",
  "number": "3.1.4",
  "title": "Parsons Problem, Mathematical Proof.",
  "body": "Parsons Problem, Mathematical Proof even numbers  Create a proof of the theorem: All automorphisms are monomorphisms.    Let be an automorphism.     Then is a prime number.    Then there exists an so that .    Then there exists an so that .     Click the heels of your ruby slippers together three times.    So .  This is a superfluous second paragraph in this block.    Thus .    And a little bit of irrelevant multi-line math .    Dorothy will not be much help with this proof.  "
},
{
  "id": "thm_homomorphismsPreserveZero",
  "level": "2",
  "url": "sec_homomorphisms.html#thm_homomorphismsPreserveZero",
  "type": "Theorem",
  "number": "3.1.5",
  "title": "",
  "body": "  Suppose is a ring homomorphism. Then .    Supppose is a ring homomorphism. Note that and in particular this tells us as desired.   "
},
{
  "id": "thm_homomorphismsPreserveUnits",
  "level": "2",
  "url": "sec_homomorphisms.html#thm_homomorphismsPreserveUnits",
  "type": "Theorem",
  "number": "3.1.6",
  "title": "",
  "body": "  Suppose is a ring homomorphism. If , then .    Suppose is a ring homomorphism and . Then there exists with . We compute: and hence .   "
},
{
  "id": "thm_homomorphismsPreservePowers",
  "level": "2",
  "url": "sec_homomorphisms.html#thm_homomorphismsPreservePowers",
  "type": "Theorem",
  "number": "3.1.7",
  "title": "",
  "body": "  Suppose is a ring homomorphism. For any and , we have in .    Suppose is a ring homomorphism and . We now proceed by induction. The base case is which certainly true.  For the inductive step, suppose that . We show : as desired. This equality completes the proof.   "
},
{
  "id": "ssec_kernelOfAHomomorphism-3",
  "level": "2",
  "url": "sec_homomorphisms.html#ssec_kernelOfAHomomorphism-3",
  "type": "Definition",
  "number": "3.1.8",
  "title": "",
  "body": " kernel   Let be a ring homomorphism. Then is the kernel of .   "
},
{
  "id": "ssec_kernelOfAHomomorphism-5",
  "level": "2",
  "url": "sec_homomorphisms.html#ssec_kernelOfAHomomorphism-5",
  "type": "Activity",
  "number": "3.1.2",
  "title": "",
  "body": "  For each homomorphism in , find (with justification), the kernel.   TBD  "
},
{
  "id": "thm_zeroKernelIsInto",
  "level": "2",
  "url": "sec_homomorphisms.html#thm_zeroKernelIsInto",
  "type": "Theorem",
  "number": "3.1.9",
  "title": "",
  "body": "  Let be a homomorphism. Then is a monomorphism if and only if .   "
},
{
  "id": "ssec_kernelOfAHomomorphism-8",
  "level": "2",
  "url": "sec_homomorphisms.html#ssec_kernelOfAHomomorphism-8",
  "type": "Proof",
  "number": "3.1.3.1",
  "title": "",
  "body": " Supppose is a monomomorphism. Since is a homomorphism we know . Suppose now that so that . Since is injective and , we conclude that . In particular, .  For the converse, suppose that . Suppose are such that . Then we have: and so . Since the only element here is , we conclude that or that . Thus is a monomorphism.  "
},
{
  "id": "thm-homomorphismsFromFieldsInjective",
  "level": "2",
  "url": "sec_homomorphisms.html#thm-homomorphismsFromFieldsInjective",
  "type": "Theorem",
  "number": "3.1.10",
  "title": "",
  "body": "  Suppose is a ring homomorphism where is a field. Then is a monomorphism.   "
},
{
  "id": "ssec_kernelOfAHomomorphism-11",
  "level": "2",
  "url": "sec_homomorphisms.html#ssec_kernelOfAHomomorphism-11",
  "type": "Proof",
  "number": "3.1.3.2",
  "title": "",
  "body": " Suppose is a ring homomorphism where is a field. We show is a monomorphism by applying . Suppose that there is , with . If , then there is a unit. By , is also a unit and in particular is not . Thus the only element of is .  "
},
{
  "id": "def_imageOfAHomomorphism",
  "level": "2",
  "url": "sec_homomorphisms.html#def_imageOfAHomomorphism",
  "type": "Definition",
  "number": "3.1.11",
  "title": "",
  "body": "  Suppose , the image of the , denoted is the range of :    "
},
{
  "id": "ssec_imageOfAHomomorphism-4",
  "level": "2",
  "url": "sec_homomorphisms.html#ssec_imageOfAHomomorphism-4",
  "type": "Activity",
  "number": "3.1.3",
  "title": "",
  "body": "  Compute the image of the homomorphisms .   "
},
{
  "id": "thm_imageIsASubring",
  "level": "2",
  "url": "sec_homomorphisms.html#thm_imageIsASubring",
  "type": "Theorem",
  "number": "3.1.12",
  "title": "",
  "body": "  Suppose is a homomorphism. Then is a subring of .    Since , we know that . We just need to show it is closed under subtraction and multiplication:  For subtraction, take . Then   For multiplication, we have We conclude that is a subring of .   "
},
{
  "id": "ssec_initialRing-2",
  "level": "2",
  "url": "sec_homomorphisms.html#ssec_initialRing-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial ring "
},
{
  "id": "thm_initialRing",
  "level": "2",
  "url": "sec_homomorphisms.html#thm_initialRing",
  "type": "Theorem",
  "number": "3.1.13",
  "title": "",
  "body": "  For any ring , there is a unique homomorphism .    Let be an arbitrary homomorphism. Since the image of unity is unity we have . Since the image of the additive identity is the additive identity, we have . By induction, we conclude that for any . Similarly for any .  Since was arbitrary, we have seen that any homomorphism is the homomorphism . This proves uniqueness.   "
},
{
  "id": "ssec_terminalRing-3",
  "level": "2",
  "url": "sec_homomorphisms.html#ssec_terminalRing-3",
  "type": "Activity",
  "number": "3.1.4",
  "title": "",
  "body": "  Verify the terminal ring, if it exists, cannot be . Do so by showing there is no homomorphism . What about ? Can it be terminal?   "
},
{
  "id": "thm_terminalRing",
  "level": "2",
  "url": "sec_homomorphisms.html#thm_terminalRing",
  "type": "Theorem",
  "number": "3.1.14",
  "title": "",
  "body": "  For any ring , there is one and only one homomorphism .    This is an exercise. There is only one set-theoretic mapping: the zero map. In this case, we just need to see that the zero map is a homomorphism. This is the case if and only if the codomain is .   "
},
{
  "id": "ssec_terminalRing-7",
  "level": "2",
  "url": "sec_homomorphisms.html#ssec_terminalRing-7",
  "type": "Exploration",
  "number": "3.1.5",
  "title": "",
  "body": "  How many homomorphisms are there ?   "
},
{
  "id": "sec_homomorphismsTF",
  "level": "2",
  "url": "sec_homomorphisms.html#sec_homomorphismsTF",
  "type": "Exercise",
  "number": "3.1.7.1",
  "title": "",
  "body": " Mark the following as true or false.   Suppose are rings. Any function is a ring homomorphism.  The identity map on a ring is a ring homomorphism.  The zero map defined by is a ring homomorphism.  If is a ring homomorphism and is a field, then is a field.  If is a ring homomorphism and is a field, then is a field.  If is a ring homomorphism and is a finite ring, then is a finite ring.  If is a ring homomorphism and is a finite ring, then is a finite ring.  If is an injective ring homomorphism and is a finite ring, then is a finite ring.   "
},
{
  "id": "evaluationHomomorphismIntegral",
  "level": "2",
  "url": "sec_homomorphisms.html#evaluationHomomorphismIntegral",
  "type": "Exercise",
  "number": "3.1.7.2",
  "title": "",
  "body": " Fix . Let be defined by . Prove that is a ring homomorphism. Then show that is neither injective nor surjective.  "
},
{
  "id": "exers_homomorphisms-4",
  "level": "2",
  "url": "sec_homomorphisms.html#exers_homomorphisms-4",
  "type": "Exercise",
  "number": "3.1.7.3",
  "title": "",
  "body": " Define by . Prove that is an injective ring homomorphism.  "
},
{
  "id": "exers_homomorphisms-5",
  "level": "2",
  "url": "sec_homomorphisms.html#exers_homomorphisms-5",
  "type": "Exercise",
  "number": "3.1.7.4",
  "title": "",
  "body": " Let be any ring and be the set of matries with entries in . Define by , where is the identity matrix. Prove that is an injective ring homomorphism.  "
},
{
  "id": "exer_evaluationHomomorphismGeneralR",
  "level": "2",
  "url": "sec_homomorphisms.html#exer_evaluationHomomorphismGeneralR",
  "type": "Exercise",
  "number": "3.1.7.5",
  "title": "",
  "body": " Suppose is a commutative ring. Fix . Let be defined by . Prove that is a ring homomorphism. Is the evaluation homomorphism injective, surjective, and\/or bijective?  "
},
{
  "id": "exers_homomorphisms-7",
  "level": "2",
  "url": "sec_homomorphisms.html#exers_homomorphisms-7",
  "type": "Exercise",
  "number": "3.1.7.6",
  "title": "",
  "body": " Gemini, Google's LLM, has claimed that for any ring , the trace map defined by where , is a ring homomorphism. This is true for exactly one . Find it, prove it is a homomorphism for that , then show it is not a homomorphism for any .  "
},
{
  "id": "exers_homomorphisms-8",
  "level": "2",
  "url": "sec_homomorphisms.html#exers_homomorphisms-8",
  "type": "Exercise",
  "number": "3.1.7.7",
  "title": "",
  "body": " Consider the function defined by . Prove that this mapping is a homomorphism. Then show it is neither injective nor bijective. What is it's image?  "
},
{
  "id": "exer_evaluationHomomorphism",
  "level": "2",
  "url": "sec_homomorphisms.html#exer_evaluationHomomorphism",
  "type": "Exercise",
  "number": "3.1.7.8",
  "title": "Evaluation Homomorphism.",
  "body": "  Evaluation Homomorphism  Evaluation Homomorphism Evaluation Homomorphism  Let be a ring. Consider the polynomial ring over . For any , define the evaluation function: by . Prove that is always an epimorphism. That is, it is a homomorphism which is always surjective.  Why does this exercise not contradict the previous exercise?  "
},
{
  "id": "exers_homomorphisms-10",
  "level": "2",
  "url": "sec_homomorphisms.html#exers_homomorphisms-10",
  "type": "Exercise",
  "number": "3.1.7.9",
  "title": "",
  "body": " Let be the Frobenius of . Show that is a monomorphism. Show it is not an epimorphism. Describe as a subring of .  "
},
{
  "id": "exers_homomorphisms-11",
  "level": "2",
  "url": "sec_homomorphisms.html#exers_homomorphisms-11",
  "type": "Exercise",
  "number": "3.1.7.10",
  "title": "",
  "body": " Suppose is a homomorphism. Prove for all .  "
},
{
  "id": "exers_homomorphisms-12",
  "level": "2",
  "url": "sec_homomorphisms.html#exers_homomorphisms-12",
  "type": "Exercise",
  "number": "3.1.7.11",
  "title": "",
  "body": " Let be the further reduce modulo three map. Show that is well-defined and an epimorphism. Then show that is not a zero-divisor. That is, homomorphisms need not preserve zero-divisors.  "
},
{
  "id": "exers_homomorphisms-13",
  "level": "2",
  "url": "sec_homomorphisms.html#exers_homomorphisms-13",
  "type": "Exercise",
  "number": "3.1.7.12",
  "title": "",
  "body": " Let and be ring homomorphisms. Prove defined by is again a ring homomorphism.  "
},
{
  "id": "exers_homomorphisms-14",
  "level": "2",
  "url": "sec_homomorphisms.html#exers_homomorphisms-14",
  "type": "Exercise",
  "number": "3.1.7.13",
  "title": "",
  "body": " Which of the properties one-to-one, onto, bijective are stable under composition of ring homomorphisms? That is, if both have one of these properties, must also have it?  "
},
{
  "id": "exer_homomorphismPreserveAdditiveInverse",
  "level": "2",
  "url": "sec_homomorphisms.html#exer_homomorphismPreserveAdditiveInverse",
  "type": "Exercise",
  "number": "3.1.7.14",
  "title": "",
  "body": " Let is a homomorphism, prove that . That is, the additive inverse of the image is the image of the additive inverse.  "
},
{
  "id": "exers_homomorphisms-16",
  "level": "2",
  "url": "sec_homomorphisms.html#exers_homomorphisms-16",
  "type": "Exercise",
  "number": "3.1.7.15",
  "title": "",
  "body": " Suppose is a ring satisfying the initial property: For all rings , there is a unique homomorphism . Prove is isomorphic to as follows.    Show that there are unique homomorphisms and     Use to prove that .    Use that satisfies the initial property to prove .    Deduce that . How might your proof change if you were to show that there is a unique terminal ring instead?    "
},
{
  "id": "exers_homomorphisms-17",
  "level": "2",
  "url": "sec_homomorphisms.html#exers_homomorphisms-17",
  "type": "Exercise",
  "number": "3.1.7.16",
  "title": "",
  "body": " Prove that the zero map is a homomorphism if and only is the zero ring.  "
},
{
  "id": "exers_homomorphisms-18",
  "level": "2",
  "url": "sec_homomorphisms.html#exers_homomorphisms-18",
  "type": "Exercise",
  "number": "3.1.7.17",
  "title": "",
  "body": " Revisiting upper triangular matrices from . Consider the projection onto the entry maps: defined by Prove that and are homomorphisms; however, and are not homomorphisms.  "
},
{
  "id": "matching-dates",
  "level": "2",
  "url": "sec_homomorphisms.html#matching-dates",
  "type": "Exercise",
  "number": "3.1.7.18",
  "title": "Matching Problem, Dates.",
  "body": "Matching Problem, Dates matching US dates  Match each type of (blank)-morphism with its definition    epimorphism  An onto homomorphism    monomorphism  An into homomorphism    isomorphism  An onto and into homomorphism    automorphism  An isomorphism where codomain is domain   "
},
{
  "id": "sec_ideals",
  "level": "1",
  "url": "sec_ideals.html",
  "type": "Section",
  "number": "3.2",
  "title": "Ideals",
  "body": " Ideals   Guiding Questions   In this section, we'll seek to answer the questions:    What are ideals?  How do ideals generalize divisibility?     One of the ways in which mathematicians study the structure of an abstract object is by considering how it interacts with other (related) objects. This is especially true of its sub objects. Thus, in linear algebra, we are often concerned with subspaces of a vector space as a means of understanding the vector space, or even submatrices as a way of understanding a matrix (see, e.g., the cofactor expansion formula for the determinant). In real analysis and topology, the important subobjects are usually open sets, or subsequences, and the study of a graph's subgraphs is an important approach to many questions in graph theory.  In this section, we begin a set-theoretic structural exploration of the notion of ring by considering a particularly important class of subsets which will be integral to our understanding of factorization.  These subsets are called ideals . They arose in the work of Kummer and Dedekind as a way of trying to recover some notion of unique factorization in rings that do not have properties like the fundamental theorem of arithmetic in .    Ideals  We first return to the kernel of a ring homomorphism introduced in . While the following proposition might seem odd, it will lead us to the definition of an ideal.    Let be a ring homomorphism and be its kernel. For any and , we have:    and             Pick and so that . Then Thus . The proof of is similar and is left as an activity.  For the second claim, take so that . Then we have Thus .      Mimic the proof of to show that whenever is a ring homomorphism and and , then     The following definition of an ideal is an attempt to generalize the properties that kernels have.   Two-Sided Ideals  Our definition is that of a two-sided ideal. There are left and right ideals; however, we will not need this generality.    Ideal   A subset of a (not necessarily commutative) ring is called an ideal if:        for all , ; and,    for all and for all , and .       Observe that the third requirement for a set to be an ideal of is simplified slightly if is commutative. Namely, we need only check one of the conditions.  There are many important examples and types of ideals, but there are also some trivial ideals contained in every ring.    Let be a ring. Then and are ideals of .    Note that is a subset of containing 0, closed under addition, and closed under multiplication. Therefore is an ideal in .  The zero ideal has . The only element in is and . Lastly, for any , we know so that . Thus is an ideal of .     ideal (proper)  ideal (trivial)  ideal (non-trivial) An ideal is called proper if . The ideals are called trivial ideals . If is not equal to , it is called non-trivial .  The following theorem provides a useful characterization of when an ideal is in fact the whole ring.    Let be a ring and an ideal of . Then if and only if contains a unit of .    If , will do.  We know that . If there is a unit , then given any , , so that and hence .      Ideals of the Integers Modulo m  We collect some examples of ideals. Let's first investigate the relationship between and .    Pick with . Then the reduction modulo map is a ring homomorphism with kernel given by     We need to show that satisfies . To that end we first show it is compatible with addition. Take . Then: But this is of course just the definition of addition in which is why we spent so long checking that addition was well-defined. We were really proving this fact.  Similarly, for multiplication:   We also have and so satisfies all three propertis of being a ring homomorphism.  Lastly, suppose . That is, . Then . But and so .    By we know that is an ideal. We could have proved this directly. We do this now as it is an important skill to develop.   Multiples of in   Fix any , then the set of multiples of is an ideal. That is, is an ideal. We prove this directly from the definition.  We have . For closure under addition, take for some . Then   Since is commutative, we just have to show absorbs left-multiplication. For that, take and arbitrary . Then Thus we have reproved : is an ideal of .  If , then is the zero ideal. If , then is the other extreme. For , the ideals are proper.     Matrix Rings are Simple   Let's consider our non-commutative example: . What are the ideals here? It turns out, that this ring is simple in that it only has trivial ideals.  Recall, the standard basis for consists of the sparse matrices which have a in row and column and zero elsewhere. For any matrix we have:   Similarly is the matrix with in the entry and zero elsewhere. Likewise for and .  Now take any ideal . We know that are two ideals. What we want to show is that if , then . To that end, suppose so there is a non-zero .  At least one of the entries of is non-zero, say . Then is the matrix with in the spot and zero elsehwere. Multiply by the scalar matrix so that we know has a matrix with in exactly one entry and zero elsewhere. That is, we know that one of the standard basis elements is in .  We now show that if one of the standard basis elements is in , then has all of the standard basis elements. The proof for each case is similar so we assume that has . Since absorbs multiplication, every product we compute will be an element of . We have: and and lastly . Thus has all of the elements in the standard basis.  To see now that has any matrix, we take a random . We can write Each one of the terms in this sum is in since absorbs multiplication. Since is closed under addition, . But was arbitrary so that .  In fact, more is true! For any field and any , the ring of matrices over is a simple ring. That is, it has no non-trivial ideals. The proof is similar to the case and : the field was irrelevant in our work and we use the matrices and their multiplication rules to show that we get all of .     Central Elements  In , to show closure under multiplication by , we used that for any polynomial we have . If is not commutative, then is also non-commutative. However, is a central element of . Namely, commutes with all polynomials.    Polynomials Without Constant Term   Let's now consider the polynomial ring over a genral ring in the indeterminant . Let be the collection of all polynomials without constant term: Let us check that is an ideal. Before that, let us notice that if then the lack of a constant term allows us to factor out an . So there is some such that . Explicitly: where we set .  The zero polynomial has zero as a constant term so . Suppose we add two polynomials without constant term (possibly extend by zero so degrees match): and their sum also has no constant term. Alternatively, there exists polynomials such that and . Hence, also has no constant term.  Suppose we have a polynomial without a constant term with a general polynomial, so and . Then there is with . Hence, and so the product lacks a constant term. We conclude that the polynomials without constant term collectively form an ideal in .  We now show that, at least in the commutative case, this ideal is the kernel of a familiar homomorphism. It is true in the non-commutative case as well but some care needs to be taken as the evaluation homomorphism from is ill-behaved when is non-commutative.  Suppose that is commutative and let us consider the evaluation homomorphism From , the kernel of this homomorphism, is an ideal. We claim that it is precisely the ideal of polynomials without constant term.  Suppose or equivalently . Writing we have and so . That is to say, the condition that is precisely the condition that has no constant term. Hence, .  This example shows that the ideal we defined is in fact a kernel of a homomorphism. This is a general fact that will lead us to the construction of quotient rings .      Principal Ideals  The most important type of ideals (for our work, at least), are those which are the sets of all multiples of a single element in the ring. We saw this with . Such ideals are called principal ideals .  For the following theorem\/definition, we require commutative rings. The interested reader is invited to formalize a definition for non-commutative rings.     Principal Ideal Generated by   Principal Ideal   Let be a commutative ring and let . The set is an ideal (called the principal ideal generated by ).    Observe that .  Moreover, if , . Finally, if and , .  Thus, is an ideal.    The element in the theorem is known as a generator of .    Let be a commutative ring, and let . Give necessary and sufficient conditions for and, separately, .  That is, fill in the blanks: _________ and _________.   Justify your answers.    We have and An acceptable alternative would be: . Make sure students are aware of this! .  Note that .  Similarly, suppose . Then , so . Conversely, if , then there is some such that , and thus for all , .  Note that this means that if we want to know if , it's enough to check that .    Principal ideals may have more than one generator.    Let be a ring and . Then , where is any unit of .    Apply the answer to the question.      In , describe the principal ideals generated by   2         9    0    27    3     Determine the subset relations among the above ideals.      All multiples of 2    All multiples of     All multiples of 9; same as the previous part.         All multiples of 27    All multiples of 3    We have . The ideal only contains , which is a subset of all ideals.      Ideals Generated by a Set  A good chunk of rings of interest are infinite and so their ideals are also usually infinite. We saw that in some cases ideals can be described by a single element, a principal generator. Rings where ideals are always generated by a single element are called principal ideal rings . These will be the subject of the next section.  It is important to understand what happens when you cannot generate the whole ideal with a single element. We introduce ideals generated by finitely many elements now. When ideals of a ring are always guaranteed to be generated by finitely many elements the ring is called Noetherian rings .     Ideal Generated by    Let be a commutative ring and . The ideal generated by  is the subset:     Let's verify it is an ideal.    Suppose is a commutative ring and . Then is an ideal.    Set . Then   For closure under addition: which is in .  For closure under left-multiplication: which is in . We conclude that is an ideal.     A Non-Principal Ideal   Take . We claim that cannot be generated by a single element. Indeed, suppose for some polynomial .  Since , we know that . Hence, for some polynomial . By comparing degrees, . In particular, is a constant that is divides . This means that or .  It cannot be that (Exercise???). There will be an easier way to prove this when we learn the Noether Isomorphism Theorem. It follows then that . This means that . But this is impossible. Indeed, notice that but every element of has even coefficients. This contradiction shows that is not a principal ideal. In particular, is not a principal ideal domain.    It turns out that any ideal in can be generated by at most two elements. The proof of this is beyond the scope of this textbook.     Mark the following as true or false.    Ideals are subrings.    All rings have ideals.    The ideal is a proper ideal.    The ideal is a proper ideal.    All ideals are principal ideals.    All principal ideals are ideals.    The kernel of a homomorphism is an ideal.    An ideal is all of if contains a zero-divisor.    Fields don't have ideals.    Matrix rings have non-trivial ideals.      In the Gaussian Integers, prove that the ideal generated by is all of but the ideal generated by is a proper ideal.    Argue that in , there is an equality of ideals . In view of , why does this make sense?    Given , when is a proper ideal? Can you describe it's elements?    What are all the sub-ideals of ? That is, what are the ideals such that ?    Prove that for any , there are only finitely many sub-ideals of .    Show that not all ideals in are principal by showing is not principally generated.    Prove that the ideal is not a principal ideal.     Sum of Ideals  Sums of Ideals ideals (sums)  Suppose are ideals of the ring . Define Show that is an ideal.    In the notation of the previous exercise, consider . What familiar ideal is ? Can you generalize?   Products of Ideals ideals (products)   Product of Ideals   Suppose are ideals of the ring . Define to be the set of finite sums of products of elements of and . Show that is an ideal.    In the notation of the previous exercise, consider . What familiar ideal is ? Can you generalize?   Annihilator Ideals  An important ideal that arises in commutative algebra are annihilator ideals . Let be a commutative ring and an element. Define the annihilator of to be the set Prove that is always an ideal.    In the notation of the previous exercise, what is ? What about ?    Prove that if is a domain and , then unless in which case the annihilator is all of .     Radical of  Radical Ideals  Another important ideal that arises in commutative algebra are radical ideals . Let be an ideal in a commutative ring. Define the radica of to be the set Prove that is an ideal.    In the notation of the previous exercise, prove that the radical of in is . Hint: should be simple. For the reverse containment, if is not in , then it is odd. Argue that the radical cannot have an odd number.    Given any ideal , what is ?    "
},
{
  "id": "obj_ideals",
  "level": "2",
  "url": "sec_ideals.html#obj_ideals",
  "type": "Guiding Questions",
  "number": "3.2",
  "title": "Guiding Questions",
  "body": " Guiding Questions   In this section, we'll seek to answer the questions:    What are ideals?  How do ideals generalize divisibility?   "
},
{
  "id": "prop_kernelIsIdeal",
  "level": "2",
  "url": "sec_ideals.html#prop_kernelIsIdeal",
  "type": "Proposition",
  "number": "3.2.1",
  "title": "",
  "body": "  Let be a ring homomorphism and be its kernel. For any and , we have:    and             Pick and so that . Then Thus . The proof of is similar and is left as an activity.  For the second claim, take so that . Then we have Thus .   "
},
{
  "id": "ssec_ideals-4",
  "level": "2",
  "url": "sec_ideals.html#ssec_ideals-4",
  "type": "Activity",
  "number": "3.2.1",
  "title": "",
  "body": "  Mimic the proof of to show that whenever is a ring homomorphism and and , then    "
},
{
  "id": "def_ideal",
  "level": "2",
  "url": "sec_ideals.html#def_ideal",
  "type": "Definition",
  "number": "3.2.2",
  "title": "",
  "body": " Ideal   A subset of a (not necessarily commutative) ring is called an ideal if:        for all , ; and,    for all and for all , and .      "
},
{
  "id": "ssec_ideals-10",
  "level": "2",
  "url": "sec_ideals.html#ssec_ideals-10",
  "type": "Theorem",
  "number": "3.2.3",
  "title": "",
  "body": "  Let be a ring. Then and are ideals of .    Note that is a subset of containing 0, closed under addition, and closed under multiplication. Therefore is an ideal in .  The zero ideal has . The only element in is and . Lastly, for any , we know so that . Thus is an ideal of .   "
},
{
  "id": "ssec_ideals-11",
  "level": "2",
  "url": "sec_ideals.html#ssec_ideals-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proper trivial ideals non-trivial "
},
{
  "id": "ssec_ideals-13",
  "level": "2",
  "url": "sec_ideals.html#ssec_ideals-13",
  "type": "Theorem",
  "number": "3.2.4",
  "title": "",
  "body": "  Let be a ring and an ideal of . Then if and only if contains a unit of .    If , will do.  We know that . If there is a unit , then given any , , so that and hence .   "
},
{
  "id": "thm_reductionModuloMIsHomomorphism",
  "level": "2",
  "url": "sec_ideals.html#thm_reductionModuloMIsHomomorphism",
  "type": "Theorem",
  "number": "3.2.5",
  "title": "",
  "body": "  Pick with . Then the reduction modulo map is a ring homomorphism with kernel given by     We need to show that satisfies . To that end we first show it is compatible with addition. Take . Then: But this is of course just the definition of addition in which is why we spent so long checking that addition was well-defined. We were really proving this fact.  Similarly, for multiplication:   We also have and so satisfies all three propertis of being a ring homomorphism.  Lastly, suppose . That is, . Then . But and so .   "
},
{
  "id": "ex_idealsInZ",
  "level": "2",
  "url": "sec_ideals.html#ex_idealsInZ",
  "type": "Example",
  "number": "3.2.6",
  "title": "Multiples of <span class=\"process-math\">\\(m\\)<\/span> in <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": " Multiples of in   Fix any , then the set of multiples of is an ideal. That is, is an ideal. We prove this directly from the definition.  We have . For closure under addition, take for some . Then   Since is commutative, we just have to show absorbs left-multiplication. For that, take and arbitrary . Then Thus we have reproved : is an ideal of .  If , then is the zero ideal. If , then is the other extreme. For , the ideals are proper.   "
},
{
  "id": "ex_matrixRingsAreSimple",
  "level": "2",
  "url": "sec_ideals.html#ex_matrixRingsAreSimple",
  "type": "Example",
  "number": "3.2.7",
  "title": "Matrix Rings are Simple.",
  "body": " Matrix Rings are Simple   Let's consider our non-commutative example: . What are the ideals here? It turns out, that this ring is simple in that it only has trivial ideals.  Recall, the standard basis for consists of the sparse matrices which have a in row and column and zero elsewhere. For any matrix we have:   Similarly is the matrix with in the entry and zero elsewhere. Likewise for and .  Now take any ideal . We know that are two ideals. What we want to show is that if , then . To that end, suppose so there is a non-zero .  At least one of the entries of is non-zero, say . Then is the matrix with in the spot and zero elsehwere. Multiply by the scalar matrix so that we know has a matrix with in exactly one entry and zero elsewhere. That is, we know that one of the standard basis elements is in .  We now show that if one of the standard basis elements is in , then has all of the standard basis elements. The proof for each case is similar so we assume that has . Since absorbs multiplication, every product we compute will be an element of . We have: and and lastly . Thus has all of the elements in the standard basis.  To see now that has any matrix, we take a random . We can write Each one of the terms in this sum is in since absorbs multiplication. Since is closed under addition, . But was arbitrary so that .  In fact, more is true! For any field and any , the ring of matrices over is a simple ring. That is, it has no non-trivial ideals. The proof is similar to the case and : the field was irrelevant in our work and we use the matrices and their multiplication rules to show that we get all of .   "
},
{
  "id": "ex_kernelEvaluation0",
  "level": "2",
  "url": "sec_ideals.html#ex_kernelEvaluation0",
  "type": "Example",
  "number": "3.2.8",
  "title": "Polynomials Without Constant Term.",
  "body": " Polynomials Without Constant Term   Let's now consider the polynomial ring over a genral ring in the indeterminant . Let be the collection of all polynomials without constant term: Let us check that is an ideal. Before that, let us notice that if then the lack of a constant term allows us to factor out an . So there is some such that . Explicitly: where we set .  The zero polynomial has zero as a constant term so . Suppose we add two polynomials without constant term (possibly extend by zero so degrees match): and their sum also has no constant term. Alternatively, there exists polynomials such that and . Hence, also has no constant term.  Suppose we have a polynomial without a constant term with a general polynomial, so and . Then there is with . Hence, and so the product lacks a constant term. We conclude that the polynomials without constant term collectively form an ideal in .  We now show that, at least in the commutative case, this ideal is the kernel of a familiar homomorphism. It is true in the non-commutative case as well but some care needs to be taken as the evaluation homomorphism from is ill-behaved when is non-commutative.  Suppose that is commutative and let us consider the evaluation homomorphism From , the kernel of this homomorphism, is an ideal. We claim that it is precisely the ideal of polynomials without constant term.  Suppose or equivalently . Writing we have and so . That is to say, the condition that is precisely the condition that has no constant term. Hence, .  This example shows that the ideal we defined is in fact a kernel of a homomorphism. This is a general fact that will lead us to the construction of quotient rings .   "
},
{
  "id": "thm_principalIdealsAreIdeals",
  "level": "2",
  "url": "sec_ideals.html#thm_principalIdealsAreIdeals",
  "type": "Theorem",
  "number": "3.2.9",
  "title": "",
  "body": "   Principal Ideal Generated by   Principal Ideal   Let be a commutative ring and let . The set is an ideal (called the principal ideal generated by ).    Observe that .  Moreover, if , . Finally, if and , .  Thus, is an ideal.   "
},
{
  "id": "ssec_principalIdeals-6",
  "level": "2",
  "url": "sec_ideals.html#ssec_principalIdeals-6",
  "type": "Investigation",
  "number": "3.2.2",
  "title": "",
  "body": "  Let be a commutative ring, and let . Give necessary and sufficient conditions for and, separately, .  That is, fill in the blanks: _________ and _________.   Justify your answers.    We have and An acceptable alternative would be: . Make sure students are aware of this! .  Note that .  Similarly, suppose . Then , so . Conversely, if , then there is some such that , and thus for all , .  Note that this means that if we want to know if , it's enough to check that .   "
},
{
  "id": "thm_principalGeneratorsUnits",
  "level": "2",
  "url": "sec_ideals.html#thm_principalGeneratorsUnits",
  "type": "Theorem",
  "number": "3.2.10",
  "title": "",
  "body": "  Let be a ring and . Then , where is any unit of .    Apply the answer to the question.   "
},
{
  "id": "ssec_principalIdeals-9",
  "level": "2",
  "url": "sec_ideals.html#ssec_principalIdeals-9",
  "type": "Activity",
  "number": "3.2.3",
  "title": "",
  "body": "  In , describe the principal ideals generated by   2         9    0    27    3     Determine the subset relations among the above ideals.      All multiples of 2    All multiples of     All multiples of 9; same as the previous part.         All multiples of 27    All multiples of 3    We have . The ideal only contains , which is a subset of all ideals.   "
},
{
  "id": "ssec_idealsGeneratedByASet-2",
  "level": "2",
  "url": "sec_ideals.html#ssec_idealsGeneratedByASet-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "principal ideal rings "
},
{
  "id": "ssec_idealsGeneratedByASet-3",
  "level": "2",
  "url": "sec_ideals.html#ssec_idealsGeneratedByASet-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Noetherian rings "
},
{
  "id": "def_idealGeneratedByFinitelyManyElements",
  "level": "2",
  "url": "sec_ideals.html#def_idealGeneratedByFinitelyManyElements",
  "type": "Definition",
  "number": "3.2.11",
  "title": "",
  "body": "   Ideal Generated by    Let be a commutative ring and . The ideal generated by  is the subset:    "
},
{
  "id": "thm_idealGeneratedByFinitelyManyElementsIsIdeal",
  "level": "2",
  "url": "sec_ideals.html#thm_idealGeneratedByFinitelyManyElementsIsIdeal",
  "type": "Theorem",
  "number": "3.2.12",
  "title": "",
  "body": "  Suppose is a commutative ring and . Then is an ideal.    Set . Then   For closure under addition: which is in .  For closure under left-multiplication: which is in . We conclude that is an ideal.   "
},
{
  "id": "ex_nonPrincipalIdeal",
  "level": "2",
  "url": "sec_ideals.html#ex_nonPrincipalIdeal",
  "type": "Example",
  "number": "3.2.13",
  "title": "A Non-Principal Ideal.",
  "body": " A Non-Principal Ideal   Take . We claim that cannot be generated by a single element. Indeed, suppose for some polynomial .  Since , we know that . Hence, for some polynomial . By comparing degrees, . In particular, is a constant that is divides . This means that or .  It cannot be that (Exercise???). There will be an easier way to prove this when we learn the Noether Isomorphism Theorem. It follows then that . This means that . But this is impossible. Indeed, notice that but every element of has even coefficients. This contradiction shows that is not a principal ideal. In particular, is not a principal ideal domain.   "
},
{
  "id": "exers_ideals-1",
  "level": "2",
  "url": "sec_ideals.html#exers_ideals-1",
  "type": "Exercise",
  "number": "3.2.5.1",
  "title": "",
  "body": " Mark the following as true or false.    Ideals are subrings.    All rings have ideals.    The ideal is a proper ideal.    The ideal is a proper ideal.    All ideals are principal ideals.    All principal ideals are ideals.    The kernel of a homomorphism is an ideal.    An ideal is all of if contains a zero-divisor.    Fields don't have ideals.    Matrix rings have non-trivial ideals.    "
},
{
  "id": "exers_ideals-2",
  "level": "2",
  "url": "sec_ideals.html#exers_ideals-2",
  "type": "Exercise",
  "number": "3.2.5.2",
  "title": "",
  "body": " In the Gaussian Integers, prove that the ideal generated by is all of but the ideal generated by is a proper ideal.  "
},
{
  "id": "exers_ideals-3",
  "level": "2",
  "url": "sec_ideals.html#exers_ideals-3",
  "type": "Exercise",
  "number": "3.2.5.3",
  "title": "",
  "body": " Argue that in , there is an equality of ideals . In view of , why does this make sense?  "
},
{
  "id": "exers_ideals-4",
  "level": "2",
  "url": "sec_ideals.html#exers_ideals-4",
  "type": "Exercise",
  "number": "3.2.5.4",
  "title": "",
  "body": " Given , when is a proper ideal? Can you describe it's elements?  "
},
{
  "id": "exer_subidealsZ12",
  "level": "2",
  "url": "sec_ideals.html#exer_subidealsZ12",
  "type": "Exercise",
  "number": "3.2.5.5",
  "title": "",
  "body": " What are all the sub-ideals of ? That is, what are the ideals such that ?  "
},
{
  "id": "exers_ideals-6",
  "level": "2",
  "url": "sec_ideals.html#exers_ideals-6",
  "type": "Exercise",
  "number": "3.2.5.6",
  "title": "",
  "body": " Prove that for any , there are only finitely many sub-ideals of .  "
},
{
  "id": "exers_ideals-7",
  "level": "2",
  "url": "sec_ideals.html#exers_ideals-7",
  "type": "Exercise",
  "number": "3.2.5.7",
  "title": "",
  "body": " Show that not all ideals in are principal by showing is not principally generated.  "
},
{
  "id": "exers_ideals-8",
  "level": "2",
  "url": "sec_ideals.html#exers_ideals-8",
  "type": "Exercise",
  "number": "3.2.5.8",
  "title": "",
  "body": " Prove that the ideal is not a principal ideal.  "
},
{
  "id": "exers_ideals-9",
  "level": "2",
  "url": "sec_ideals.html#exers_ideals-9",
  "type": "Exercise",
  "number": "3.2.5.9",
  "title": "",
  "body": "  Sum of Ideals  Sums of Ideals ideals (sums)  Suppose are ideals of the ring . Define Show that is an ideal.  "
},
{
  "id": "exers_ideals-10",
  "level": "2",
  "url": "sec_ideals.html#exers_ideals-10",
  "type": "Exercise",
  "number": "3.2.5.10",
  "title": "",
  "body": " In the notation of the previous exercise, consider . What familiar ideal is ? Can you generalize?  "
},
{
  "id": "exers_ideals-11",
  "level": "2",
  "url": "sec_ideals.html#exers_ideals-11",
  "type": "Exercise",
  "number": "3.2.5.11",
  "title": "",
  "body": "Products of Ideals ideals (products)   Product of Ideals   Suppose are ideals of the ring . Define to be the set of finite sums of products of elements of and . Show that is an ideal.  "
},
{
  "id": "exers_ideals-12",
  "level": "2",
  "url": "sec_ideals.html#exers_ideals-12",
  "type": "Exercise",
  "number": "3.2.5.12",
  "title": "",
  "body": " In the notation of the previous exercise, consider . What familiar ideal is ? Can you generalize?  "
},
{
  "id": "exers_ideals-13",
  "level": "2",
  "url": "sec_ideals.html#exers_ideals-13",
  "type": "Exercise",
  "number": "3.2.5.13",
  "title": "",
  "body": "Annihilator Ideals  An important ideal that arises in commutative algebra are annihilator ideals . Let be a commutative ring and an element. Define the annihilator of to be the set Prove that is always an ideal.  "
},
{
  "id": "exers_ideals-14",
  "level": "2",
  "url": "sec_ideals.html#exers_ideals-14",
  "type": "Exercise",
  "number": "3.2.5.14",
  "title": "",
  "body": " In the notation of the previous exercise, what is ? What about ?  "
},
{
  "id": "exers_ideals-15",
  "level": "2",
  "url": "sec_ideals.html#exers_ideals-15",
  "type": "Exercise",
  "number": "3.2.5.15",
  "title": "",
  "body": " Prove that if is a domain and , then unless in which case the annihilator is all of .  "
},
{
  "id": "exers_ideals-16",
  "level": "2",
  "url": "sec_ideals.html#exers_ideals-16",
  "type": "Exercise",
  "number": "3.2.5.16",
  "title": "",
  "body": "  Radical of  Radical Ideals  Another important ideal that arises in commutative algebra are radical ideals . Let be an ideal in a commutative ring. Define the radica of to be the set Prove that is an ideal.  "
},
{
  "id": "exers_ideals-17",
  "level": "2",
  "url": "sec_ideals.html#exers_ideals-17",
  "type": "Exercise",
  "number": "3.2.5.17",
  "title": "",
  "body": " In the notation of the previous exercise, prove that the radical of in is . Hint: should be simple. For the reverse containment, if is not in , then it is odd. Argue that the radical cannot have an odd number.  "
},
{
  "id": "exers_ideals-18",
  "level": "2",
  "url": "sec_ideals.html#exers_ideals-18",
  "type": "Exercise",
  "number": "3.2.5.18",
  "title": "",
  "body": " Given any ideal , what is ?  "
},
{
  "id": "sec_quotientRings",
  "level": "1",
  "url": "sec_quotientRings.html",
  "type": "Section",
  "number": "3.3",
  "title": "Quotient Rings",
  "body": " Quotient Rings   Guiding Questions   In this section, we'll seek to answer the questions:    How can we use ideals to build new rings out of old?  What sorts of ideals allow us to build domains? Fields?  What is the Noether Isomorphism Theorem?     If the only rings that existed were polynomial rings, familiar systems of numbers like , polynomial rings, and matrix rings, there would still be enough to justify defining the concept of a ring and exploring its properties. However, these are not the only rings that exist. In this section, we explore a way of building new rings from old by means of ideals. To better understand these new rings, we will also define two new classes of ideals: prime ideals, and maximal ideals. We end by briefly connecting these rings to a familiar problem from high school algebra.    Congruence modulo  The major concept of this section is the notion of congruence modulo . One can reasonably think of this idea as a generalization of congruence modulo in .   congruence mod   Let be a ring, an ideal of , and . We say is congruent to modulo if . If this is the case, we write .     Congruence modulo   We first show that in the case , congruence modulo is the same as congruence modulo . Indeed, supppose are congruent modulo . Then and so for some . Hence, .  The preceeding argument is an if and only if argument so can be read in reverse too. Hence, congruence modulo and congruence modulo agree.     Congruence in   Let's now work in and first consider the ideal . Are and congruent modulo ? The difference is and so they are congruent modulo . What other elements are congruent modulo ?  What other elements are congruent modulo ? Let's first better understand . This is the set of all integral polynomial multiples of : In particular, all coefficients of elements of are multiples of . From this we learn that are congruent modulo if and only if the coefficients of their difference are divisible by . So, for example, are not congruent modulo , while and are congruent modulo .  Let's look at another ideal here, say . As a first example, and are congruent modulo as . However, are not congruent modulo as their difference is which is not a multiple of .  What does it mean here to be congruent modulo ? Again, let's better understand the ideal : and so elements of are precisely the polynomials without a constant term. In particular, two elements are congruent modulo if and only if they have identical constant term as their difference needs to not have a constant term.  Hence, the polynomial and are congruent modulo while the polynomials are not.     Congruence in   Let's now look at a more complicated example: the ideal . This ideal is not principal and as a reminder it is equal to: That is, it is all polynomial combinations of .  What is congruence modulo ? We consider a couple of examples first. The polynomials and are congruent modulo as and so the difference is a polynomial combination of . As another example, we see that and are also congruent modulo : and the difference is again a polynomial combination of . Let's look at and : This polynomial cannot be written as a polynomial combination of because such combinations cannot have a constant term!  Our sequence of example elements seems to indicate that polynomials are congruent modulo if and only if they have the same constant term. And indeed this is the case. The details of which are left as an exercise which is primarily an exercise in multivariate polynomial notation.      Given a ring , ideal , and , when is it the case that ?    When .    Observe that if , then there is some such that , and so .  The notation is more than just notation. It is an equality of sets. Given any ideal and any , define to be the set of all translates of under .    Let be an ideal and . Then is congruent to modulo if and only if we have equality of sets .    Suppose is congruent to modulo . Then so that for some . Take any , then as . Thus . Using instead we have, similarly, that . Thus .  Suppose . Since , we know that . Since , we have that . Thus for some . Equivalently . Thus is congruent to modulo .       Coset (ideal)   coset (ideal)   Given an ideal in a commutative ring . A coset of is a set of the form The collection of all cosets is denoted or if is understood:       We take a minute to observe that in the notion of congruence: modulo is equivalent to the definition here. Indeed, any defines a principal ideal . If , then for some . Hence, . And conversely, if , then . Thus there exists with and so .  In particular, this is a successful generalization of the notion of congruence modulo .    As was the case in , congruence modulo is an equivalence relation.    Let be a ring and an ideal of . Then congruence modulo is an equivalence relation on .    Since , for all , so and the relation is reflexive.  Moreover, if , then , so the relation is symmetric.  If and , then , so the relation is transitive.      Quotient Rings   Notation for Integers Modulo  It's standard practice to identify the principal ideal with when no confusion can arise. In , the set of equivalence classes modulo is denoted by instead of .   The set of equivalence classes under this relation is denoted . In particular, What is more, this is not merely a set of equivalence classes. As the next two theorems demonstrate, this set possesses two algebraic operations that extend naturally from those of .    Let be a ring and an ideal of . If such that and , then .    Suppose and . Then and . Adding, we have Thus, .    Note that the only requirement in the proof of this theorem is that is closed under addition.    Let be a commutative ring and an ideal of . If such that and , then .    As before, we observe that and . Write and . Then , so . Therefore .    The preceeding proof used two properties of : closure under addition and closure under multiplication by .  The previous two theorems together show that addition and multiplication on the set is well-defined. As these operations are built on the operations of , it will likely not surprise you to learn that the usual axioms defining a ring also hold.   quotient ring   Let be a commutative ring, an ideal of , and . The set of cosets of , denoted , is a commutative ring (called the quotient ring of by ) with additive identity and multiplicative identity under the following operations:     These operations were shown to be well-defined in and . We need to show that, with these operations, all eight ring axioms hold and that multiplication is commutative. Take .  We begin with the additive axioms. For associativity: Since has associative addition we have and so the cosets are equal.  For commutativity:   For identity: as is the additive identity in .  For inverses: and so the additive inverse of is .  We now turn to the multiplicative axioms plus commutativity. For associativity: But multiplication in is associative so that . Hence,   For commutativity:   For identity: as is the multiplicative identity in .  Since has commutative multiplication we only need to check the left-distributive axiom. where we have used that multiplication in has the left-distributive property in line 3.  We conclude that is a commutative ring.    Thus, given a ring and ideal of , we may build the quotient ring .    Answer the questions below. Be prepared to give an information justification of your thinking.   Suppose and . Calculate and .  Let and . List all elements of (there should be 9 in total).  Set and . Find an element such that .     In and , we will explore the question of when possesses some of the properties we've previously explored, e.g., when is a domain? A field? First, we conclude with two explorations. The first gives us a sense of what these rings can look like. The second connects quotient rings to solution sets of polynomial equations.    Consider the ring and the ideals and .   List the elements of and .  What happens to in when you pass to the quotient ring ? How about as you pass from to ?  In view of your answer to the previous question, how does behave as you mod out by and ?  Build addition and multiplication tables for each of and .    TBD    graph (of a function)  zero set   One of the most useful connections made in high school algebra is the connection between a function (in particular, a polynomial function) and its graph . We may extend this notion to ideals via the concept of a zero set as follows.  Let be a field and with a nonzero ideal. We define the zero set of , denoted , as the set of all points for which for all .   Suppose . Prove that if and only if for each . Thus, can be determined entirely by examining the generators of .  Describe given .  (Challenge) Given and , describe and .  Given , describe the relationship between the variables and in the quotient . In what way have we restricted our polynomial inputs to the parabola ?    TBD.      Noether Isomorphism Theorem  As quotient rings provide fertile soil for building new examples of rings, it should not surprise us to find that homomorphisms interact with quotient rings in interesting and useful ways. Chief among them are the isomorphism theorems . In this subsection, we focus primarily on the Noether Isomorphism Theorem (also called the First Isomorphism Theorem).  We have seen that any homomorphism gives rise to an ideal of , namely . Our next theorem demonstrates that, given a commutative ring , every ideal is the kernel of some homomorphism defined on . In particular, our definition of ideal accurately captured what it meant to be a kernel.    Let be commutative and an ideal of . Define by . Then is an epimorphism with .    We first verify that is a homomorphism. Note that which is the multiplicative identity in .  For compatibility with addition:   For compatibility with multiplication: Thus is a homomorphism.  That is surjective is clear: for any we have . Lastly, suppose . Then so that . Thus . Also for any we have so that which shows .    This is just a generalization of .  We work toward a proof of the Noether Isomorphism Theorem for Rings. The proof will proceed by a sequence of lemmas.  Throughout, let and be commutative rings, and let be a homomorphism. Recall that is a subring of .  Define by .    Using the notation from above, is a well-defined function.     Suppose that . Then , so , and thus . Therefore, , and is well-defined.     Using the notation above, is a homomorphism.     We have as is a homomorphism.  We show that preserves addition. That it preserves multiplication will follow similarly. We compute: where we have used that is a homomorphism in line 2.     Using the notation above, is one-to-one.     Suppose that . That is, . Then , so , and therefore . Thus, is one-to-one.     Using the notation above, is onto.     Since is onto by definition, given any there is some such that . Then .   We thus obtain the following, due to Emmy Noether:   First Isomorphism Theorem  Noether Isomorphism Theorem  Noether's Isomorphism Theorem  E. Noether   Let be a homomorphism of commutative rings. Then .  In particular, if is an epimorphism (it is onto), .    The Noether Isomorphism Theorem gives a useful way of establishing an isomorphism between a quotient ring and another ring : find an onto homomorphism with kernel . It's helpful to think of the Noether isomorphism theorem in terms of a diagram:   The way we read these diagrams is if you start with an element at any of the nodes and compute the images under each arrow. You should always end up with the same spot. In this context, to compute , we can first surject onto sending . Then apply the Noether isomorphism . Then include that into .  The diagram is meant to visualize a factorization of into varies pieces. In particular, we see that any homomorphism factors into the composite of an epimorphism followed by a monomorphism.    Applying the Noether Isomorphism Theorem  In the next three examples, we make heavy use of the fact that the evaluation homomorphism from is a homomorphism. We prove three separate isomorphisms using it.    There is an isomorphism of rings . Indeed, let us consider the evaluation homomorphism defined by .  Evaluation is an epimorphism: Pick any and consider the polynomial . Then . Since evaluation is a surjective homomorphism it is an epimorphism.  We claim the kernel of evaluation at zero is . Suppose . Then and so . We conclude . and so . Thus .  By the Noether Isomorphism Theorem we have .    The previous example illustrates the power of the evaluation mapping. Here's another (similar) example.    There is an isomorphism of rings . Indeed, let us consider the evaluation at mapping: defined by . In a manner similar to the previous example but using polynomial division, we can see that .  The evaluation at mapping is an epimorphism as for any we have . By the Noether Isomorphism Theorem .  Of course nothing is special about here. You will prove a general theorem in Exercise????     Algebraic Definition of Complex Numbers   At this point, we've seen two different incarnations of the complex numbers: and We will show yet another way of constructing them.  Let be the evaluation at homomorphism. Let's also note that . Thus is an epimorphism.  Since we know that . Suppose that . Using the , we can divide by to get where . Since is in the kernel we have: and so . Since has degree at most one, we can write . But then implies . Thus and . In particular, . Finally, we can conclude that and by the Noether Isomorphism Theorem   This example shows we could redefine the complex numbers as and this is a purely algebraic definition of (up to using ).      Let's now consider and the principal ideal . Since we have equality of cosets: This means that any can be replaced with a . And so: In the quotient ring we therefore have .  This seems to indicate that the quotient ring doesn't have a (as it becomes ) so it's as if we just have . Furthermore, in this ring. One ring that should come to mind is ! Let's try to prove it is isomorphic to .  To apply the Noether Isomorphism Theorem we first need a homomorphism. Whatever the homomorphism we define it should send to . Likely it should be similar to the reduction modulo mapping as well. Coupling these two requirements leads to defined by   Let's check it is a homomorphism: and so preserves unity. For we have and so it preserves multiplication. That it preserves addition will be left as an exercise.  We now turn to the kernel. Evidently . So that . Before we show the reverse containment observe that for any we have:   Now for the reverse containment, we notice that if , then Thus there exists with . Thus and both of these terms are in . We conclude .  Lastly, by the Noether Isomorphism Theorem we have an isomorphism: defined by .      Let and define by . That is, sends an equivalence class represented by to the equivalence class represented by in .   Show that is a well-defined function. That is, to say if , then .  Prove that is a homomorphism.  Is onto? Justify.  Compute (that is, list the elements in the set). Is one-to-one?  Without appealing to the definition, is prime? Maximal? Explain.           Mark the following as true or false.    Suppose is an ideal of a ring , then congruence modulo is reflexive.    Suppose is an ideal of a ring , then congruence modulo is symmetric.    If is an ideal of , then is a non-zero ring.    Suppose is a ring homomorphism, then .    Every ideal is a kernel of a homomorphism.    Every kernel of a homomorphism is an ideal.    Suppose is an ideal, then if and only if .    Suppose is an ideal, then .      Determine (with brief justification) whether in the following rings .   , , ,  , , ,  , , ,  , , ,  ( Challenge. ) , , ,     Let and . Carry out the coset arithmetic in the quotient :                     Let and . Carry out the coset arithmetic in the quotient :                     Prove that are congruent modulo if and only if they have the same constant term.    The quotient ring is isomorphic to . Prove it by writing out all of the elements of the quotient ring and computing their addition and multiplication tables.    Finish the argument in that is a homomorphism.    In this exercise you will prove that . It will proceed in a sequence of steps.   Show that in we have .    Use the multiplicativity of the norm given by to prove that the non-zero elements in have norm divisible by : implies .    Show that the unique homomorphism defined by is in fact a homomorphism (or use a result to see it is).    Show that . Use (b) to prove that is the smallest positive integer such that .    Prove that is an epimorphism using coset arithmetic and then use the Noether isomorphism theorem to prove .       Ponder what happens in general with a quotient where is prime.    Let be a ring. Prove that for any , we have an isomorphism .    Suppose with . Define given by . That is, sends an equivalence class represented by to the equivalence class represented by .    Prove is well-defined: If are such that in , then in . This part uses the divsibility hypothesis.    Prove is a homomorphism.    Determine if is a monomorphism, epimorphism, and\/or isomorphism.    What is the kernel and what does the Noether Isomorphism tell us here?      Show that if and , then there cannot exist a homomorphism . Hint: Look at the image of the unity.    Consider the polynomial ring in two variables over . Elements here look like: where the subscript on tells us which monomial it is the coefficient of.  We can think of this polynomial ring as polynomial functions on where is the function .  The horizontal axis is defined by the polynomial equation . In this way we think of the horizontal axis as being the same as the polynomial . Prove that by defining a homomorphism by . Show that , which is just the evaluation at function, is an epimorphism. Then show that it's kernel is precisely . Deduce the desired isomorphism from the Noether Isomorphism Theorem.    Show that for and a field:     Prove . Do so by defining an epimorphism . Then show that and that any element in can be written as a linear coset: . Use this to deduce . Finally use the Noether Isomorphism Theorem to prove the desired isomorphism.   Correspondence Theorem  Prove the weak Correspondence Theorem: For any ideals and , there exists a unique ideal such that the image of under the quotient is . Hint: Set Show that is an ideal of , that it contains , that . Then prove that is unique.    Use the to find all ideals in . might be helpful too.    "
},
{
  "id": "obj_quotientRings",
  "level": "2",
  "url": "sec_quotientRings.html#obj_quotientRings",
  "type": "Guiding Questions",
  "number": "3.3",
  "title": "Guiding Questions",
  "body": " Guiding Questions   In this section, we'll seek to answer the questions:    How can we use ideals to build new rings out of old?  What sorts of ideals allow us to build domains? Fields?  What is the Noether Isomorphism Theorem?   "
},
{
  "id": "ssec_congruenceModuloI-3",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_congruenceModuloI-3",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": " congruence mod   Let be a ring, an ideal of , and . We say is congruent to modulo if . If this is the case, we write .   "
},
{
  "id": "ssec_congruenceModuloI-4",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_congruenceModuloI-4",
  "type": "Example",
  "number": "3.3.2",
  "title": "Congruence modulo <span class=\"process-math\">\\((m)\\)<\/span>.",
  "body": " Congruence modulo   We first show that in the case , congruence modulo is the same as congruence modulo . Indeed, supppose are congruent modulo . Then and so for some . Hence, .  The preceeding argument is an if and only if argument so can be read in reverse too. Hence, congruence modulo and congruence modulo agree.   "
},
{
  "id": "ssec_congruenceModuloI-5",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_congruenceModuloI-5",
  "type": "Example",
  "number": "3.3.3",
  "title": "Congruence in <span class=\"process-math\">\\(\\Z[x]\\)<\/span>.",
  "body": " Congruence in   Let's now work in and first consider the ideal . Are and congruent modulo ? The difference is and so they are congruent modulo . What other elements are congruent modulo ?  What other elements are congruent modulo ? Let's first better understand . This is the set of all integral polynomial multiples of : In particular, all coefficients of elements of are multiples of . From this we learn that are congruent modulo if and only if the coefficients of their difference are divisible by . So, for example, are not congruent modulo , while and are congruent modulo .  Let's look at another ideal here, say . As a first example, and are congruent modulo as . However, are not congruent modulo as their difference is which is not a multiple of .  What does it mean here to be congruent modulo ? Again, let's better understand the ideal : and so elements of are precisely the polynomials without a constant term. In particular, two elements are congruent modulo if and only if they have identical constant term as their difference needs to not have a constant term.  Hence, the polynomial and are congruent modulo while the polynomials are not.   "
},
{
  "id": "ssec_congruenceModuloI-6",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_congruenceModuloI-6",
  "type": "Example",
  "number": "3.3.4",
  "title": "Congruence in <span class=\"process-math\">\\(\\C[x,y]\\)<\/span>.",
  "body": " Congruence in   Let's now look at a more complicated example: the ideal . This ideal is not principal and as a reminder it is equal to: That is, it is all polynomial combinations of .  What is congruence modulo ? We consider a couple of examples first. The polynomials and are congruent modulo as and so the difference is a polynomial combination of . As another example, we see that and are also congruent modulo : and the difference is again a polynomial combination of . Let's look at and : This polynomial cannot be written as a polynomial combination of because such combinations cannot have a constant term!  Our sequence of example elements seems to indicate that polynomials are congruent modulo if and only if they have the same constant term. And indeed this is the case. The details of which are left as an exercise which is primarily an exercise in multivariate polynomial notation.   "
},
{
  "id": "ssec_congruenceModuloI-7",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_congruenceModuloI-7",
  "type": "Exploration",
  "number": "3.3.1",
  "title": "",
  "body": "  Given a ring , ideal , and , when is it the case that ?    When .   "
},
{
  "id": "thm_congruenceIsEquality",
  "level": "2",
  "url": "sec_quotientRings.html#thm_congruenceIsEquality",
  "type": "Theorem",
  "number": "3.3.5",
  "title": "",
  "body": "  Let be an ideal and . Then is congruent to modulo if and only if we have equality of sets .    Suppose is congruent to modulo . Then so that for some . Take any , then as . Thus . Using instead we have, similarly, that . Thus .  Suppose . Since , we know that . Since , we have that . Thus for some . Equivalently . Thus is congruent to modulo .   "
},
{
  "id": "def_cosetsIdeal",
  "level": "2",
  "url": "sec_quotientRings.html#def_cosetsIdeal",
  "type": "Definition",
  "number": "3.3.6",
  "title": "",
  "body": "   Coset (ideal)   coset (ideal)   Given an ideal in a commutative ring . A coset of is a set of the form The collection of all cosets is denoted or if is understood:    "
},
{
  "id": "ssec_congruenceModuloI-12",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_congruenceModuloI-12",
  "type": "Example",
  "number": "3.3.7",
  "title": "",
  "body": "  We take a minute to observe that in the notion of congruence: modulo is equivalent to the definition here. Indeed, any defines a principal ideal . If , then for some . Hence, . And conversely, if , then . Thus there exists with and so .  In particular, this is a successful generalization of the notion of congruence modulo .   "
},
{
  "id": "ssec_congruenceModuloI-14",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_congruenceModuloI-14",
  "type": "Theorem",
  "number": "3.3.8",
  "title": "",
  "body": "  Let be a ring and an ideal of . Then congruence modulo is an equivalence relation on .    Since , for all , so and the relation is reflexive.  Moreover, if , then , so the relation is symmetric.  If and , then , so the relation is transitive.   "
},
{
  "id": "thm_additionModI",
  "level": "2",
  "url": "sec_quotientRings.html#thm_additionModI",
  "type": "Theorem",
  "number": "3.3.9",
  "title": "",
  "body": "  Let be a ring and an ideal of . If such that and , then .    Suppose and . Then and . Adding, we have Thus, .   "
},
{
  "id": "thm_multiplicationModI",
  "level": "2",
  "url": "sec_quotientRings.html#thm_multiplicationModI",
  "type": "Theorem",
  "number": "3.3.10",
  "title": "",
  "body": "  Let be a commutative ring and an ideal of . If such that and , then .    As before, we observe that and . Write and . Then , so . Therefore .   "
},
{
  "id": "ssec_quotientRings-9",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_quotientRings-9",
  "type": "Theorem",
  "number": "3.3.11",
  "title": "",
  "body": " quotient ring   Let be a commutative ring, an ideal of , and . The set of cosets of , denoted , is a commutative ring (called the quotient ring of by ) with additive identity and multiplicative identity under the following operations:     These operations were shown to be well-defined in and . We need to show that, with these operations, all eight ring axioms hold and that multiplication is commutative. Take .  We begin with the additive axioms. For associativity: Since has associative addition we have and so the cosets are equal.  For commutativity:   For identity: as is the additive identity in .  For inverses: and so the additive inverse of is .  We now turn to the multiplicative axioms plus commutativity. For associativity: But multiplication in is associative so that . Hence,   For commutativity:   For identity: as is the multiplicative identity in .  Since has commutative multiplication we only need to check the left-distributive axiom. where we have used that multiplication in has the left-distributive property in line 3.  We conclude that is a commutative ring.   "
},
{
  "id": "ssec_quotientRings-11",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_quotientRings-11",
  "type": "Activity",
  "number": "3.3.2",
  "title": "",
  "body": "  Answer the questions below. Be prepared to give an information justification of your thinking.   Suppose and . Calculate and .  Let and . List all elements of (there should be 9 in total).  Set and . Find an element such that .    "
},
{
  "id": "ssec_quotientRings-13",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_quotientRings-13",
  "type": "Exploration",
  "number": "3.3.3",
  "title": "",
  "body": "  Consider the ring and the ideals and .   List the elements of and .  What happens to in when you pass to the quotient ring ? How about as you pass from to ?  In view of your answer to the previous question, how does behave as you mod out by and ?  Build addition and multiplication tables for each of and .    TBD  "
},
{
  "id": "ssec_quotientRings-14",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_quotientRings-14",
  "type": "Exploration",
  "number": "3.3.4",
  "title": "",
  "body": " graph (of a function)  zero set   One of the most useful connections made in high school algebra is the connection between a function (in particular, a polynomial function) and its graph . We may extend this notion to ideals via the concept of a zero set as follows.  Let be a field and with a nonzero ideal. We define the zero set of , denoted , as the set of all points for which for all .   Suppose . Prove that if and only if for each . Thus, can be determined entirely by examining the generators of .  Describe given .  (Challenge) Given and , describe and .  Given , describe the relationship between the variables and in the quotient . In what way have we restricted our polynomial inputs to the parabola ?    TBD.  "
},
{
  "id": "ssec_NoetherIsomorphismTheorem-4",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_NoetherIsomorphismTheorem-4",
  "type": "Theorem",
  "number": "3.3.12",
  "title": "",
  "body": "  Let be commutative and an ideal of . Define by . Then is an epimorphism with .    We first verify that is a homomorphism. Note that which is the multiplicative identity in .  For compatibility with addition:   For compatibility with multiplication: Thus is a homomorphism.  That is surjective is clear: for any we have . Lastly, suppose . Then so that . Thus . Also for any we have so that which shows .   "
},
{
  "id": "ssec_NoetherIsomorphismTheorem-9",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_NoetherIsomorphismTheorem-9",
  "type": "Lemma",
  "number": "3.3.13",
  "title": "",
  "body": "  Using the notation from above, is a well-defined function.   "
},
{
  "id": "ssec_NoetherIsomorphismTheorem-10",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_NoetherIsomorphismTheorem-10",
  "type": "Proof",
  "number": "3.3.3.1",
  "title": "",
  "body": " Suppose that . Then , so , and thus . Therefore, , and is well-defined.  "
},
{
  "id": "ssec_NoetherIsomorphismTheorem-11",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_NoetherIsomorphismTheorem-11",
  "type": "Lemma",
  "number": "3.3.14",
  "title": "",
  "body": "  Using the notation above, is a homomorphism.   "
},
{
  "id": "ssec_NoetherIsomorphismTheorem-12",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_NoetherIsomorphismTheorem-12",
  "type": "Proof",
  "number": "3.3.3.2",
  "title": "",
  "body": " We have as is a homomorphism.  We show that preserves addition. That it preserves multiplication will follow similarly. We compute: where we have used that is a homomorphism in line 2.  "
},
{
  "id": "ssec_NoetherIsomorphismTheorem-13",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_NoetherIsomorphismTheorem-13",
  "type": "Lemma",
  "number": "3.3.15",
  "title": "",
  "body": "  Using the notation above, is one-to-one.   "
},
{
  "id": "ssec_NoetherIsomorphismTheorem-14",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_NoetherIsomorphismTheorem-14",
  "type": "Proof",
  "number": "3.3.3.3",
  "title": "",
  "body": " Suppose that . That is, . Then , so , and therefore . Thus, is one-to-one.  "
},
{
  "id": "ssec_NoetherIsomorphismTheorem-15",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_NoetherIsomorphismTheorem-15",
  "type": "Lemma",
  "number": "3.3.16",
  "title": "",
  "body": "  Using the notation above, is onto.   "
},
{
  "id": "ssec_NoetherIsomorphismTheorem-16",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_NoetherIsomorphismTheorem-16",
  "type": "Proof",
  "number": "3.3.3.4",
  "title": "",
  "body": " Since is onto by definition, given any there is some such that . Then .  "
},
{
  "id": "ssec_NoetherIsomorphismTheorem-18",
  "level": "2",
  "url": "sec_quotientRings.html#ssec_NoetherIsomorphismTheorem-18",
  "type": "Theorem",
  "number": "3.3.17",
  "title": "Noether’s Isomorphism Theorem.",
  "body": " First Isomorphism Theorem  Noether Isomorphism Theorem  Noether's Isomorphism Theorem  E. Noether   Let be a homomorphism of commutative rings. Then .  In particular, if is an epimorphism (it is onto), .   "
},
{
  "id": "subsec--3",
  "level": "2",
  "url": "sec_quotientRings.html#subsec--3",
  "type": "Example",
  "number": "3.3.18",
  "title": "",
  "body": "  There is an isomorphism of rings . Indeed, let us consider the evaluation homomorphism defined by .  Evaluation is an epimorphism: Pick any and consider the polynomial . Then . Since evaluation is a surjective homomorphism it is an epimorphism.  We claim the kernel of evaluation at zero is . Suppose . Then and so . We conclude . and so . Thus .  By the Noether Isomorphism Theorem we have .   "
},
{
  "id": "subsec--5",
  "level": "2",
  "url": "sec_quotientRings.html#subsec--5",
  "type": "Example",
  "number": "3.3.19",
  "title": "",
  "body": "  There is an isomorphism of rings . Indeed, let us consider the evaluation at mapping: defined by . In a manner similar to the previous example but using polynomial division, we can see that .  The evaluation at mapping is an epimorphism as for any we have . By the Noether Isomorphism Theorem .  Of course nothing is special about here. You will prove a general theorem in Exercise????   "
},
{
  "id": "ex_algebraicDefinitionC",
  "level": "2",
  "url": "sec_quotientRings.html#ex_algebraicDefinitionC",
  "type": "Example",
  "number": "3.3.20",
  "title": "Algebraic Definition of Complex Numbers.",
  "body": " Algebraic Definition of Complex Numbers   At this point, we've seen two different incarnations of the complex numbers: and We will show yet another way of constructing them.  Let be the evaluation at homomorphism. Let's also note that . Thus is an epimorphism.  Since we know that . Suppose that . Using the , we can divide by to get where . Since is in the kernel we have: and so . Since has degree at most one, we can write . But then implies . Thus and . In particular, . Finally, we can conclude that and by the Noether Isomorphism Theorem   This example shows we could redefine the complex numbers as and this is a purely algebraic definition of (up to using ).   "
},
{
  "id": "ex_ZSqrtNeg2Mod",
  "level": "2",
  "url": "sec_quotientRings.html#ex_ZSqrtNeg2Mod",
  "type": "Example",
  "number": "3.3.21",
  "title": "",
  "body": "  Let's now consider and the principal ideal . Since we have equality of cosets: This means that any can be replaced with a . And so: In the quotient ring we therefore have .  This seems to indicate that the quotient ring doesn't have a (as it becomes ) so it's as if we just have . Furthermore, in this ring. One ring that should come to mind is ! Let's try to prove it is isomorphic to .  To apply the Noether Isomorphism Theorem we first need a homomorphism. Whatever the homomorphism we define it should send to . Likely it should be similar to the reduction modulo mapping as well. Coupling these two requirements leads to defined by   Let's check it is a homomorphism: and so preserves unity. For we have and so it preserves multiplication. That it preserves addition will be left as an exercise.  We now turn to the kernel. Evidently . So that . Before we show the reverse containment observe that for any we have:   Now for the reverse containment, we notice that if , then Thus there exists with . Thus and both of these terms are in . We conclude .  Lastly, by the Noether Isomorphism Theorem we have an isomorphism: defined by .   "
},
{
  "id": "subsec--8",
  "level": "2",
  "url": "sec_quotientRings.html#subsec--8",
  "type": "Activity",
  "number": "3.3.5",
  "title": "",
  "body": "  Let and define by . That is, sends an equivalence class represented by to the equivalence class represented by in .   Show that is a well-defined function. That is, to say if , then .  Prove that is a homomorphism.  Is onto? Justify.  Compute (that is, list the elements in the set). Is one-to-one?  Without appealing to the definition, is prime? Maximal? Explain.       "
},
{
  "id": "exers_divisibilityIntegralDomains-1",
  "level": "2",
  "url": "sec_quotientRings.html#exers_divisibilityIntegralDomains-1",
  "type": "Exercise",
  "number": "3.3.5.1",
  "title": "",
  "body": " Mark the following as true or false.    Suppose is an ideal of a ring , then congruence modulo is reflexive.    Suppose is an ideal of a ring , then congruence modulo is symmetric.    If is an ideal of , then is a non-zero ring.    Suppose is a ring homomorphism, then .    Every ideal is a kernel of a homomorphism.    Every kernel of a homomorphism is an ideal.    Suppose is an ideal, then if and only if .    Suppose is an ideal, then .    "
},
{
  "id": "exers_divisibilityIntegralDomains-2",
  "level": "2",
  "url": "sec_quotientRings.html#exers_divisibilityIntegralDomains-2",
  "type": "Exercise",
  "number": "3.3.5.2",
  "title": "",
  "body": " Determine (with brief justification) whether in the following rings .   , , ,  , , ,  , , ,  , , ,  ( Challenge. ) , , ,   "
},
{
  "id": "exers_divisibilityIntegralDomains-3",
  "level": "2",
  "url": "sec_quotientRings.html#exers_divisibilityIntegralDomains-3",
  "type": "Exercise",
  "number": "3.3.5.3",
  "title": "",
  "body": " Let and . Carry out the coset arithmetic in the quotient :                   "
},
{
  "id": "exers_divisibilityIntegralDomains-4",
  "level": "2",
  "url": "sec_quotientRings.html#exers_divisibilityIntegralDomains-4",
  "type": "Exercise",
  "number": "3.3.5.4",
  "title": "",
  "body": " Let and . Carry out the coset arithmetic in the quotient :                   "
},
{
  "id": "exers_divisibilityIntegralDomains-5",
  "level": "2",
  "url": "sec_quotientRings.html#exers_divisibilityIntegralDomains-5",
  "type": "Exercise",
  "number": "3.3.5.5",
  "title": "",
  "body": " Prove that are congruent modulo if and only if they have the same constant term.  "
},
{
  "id": "exers_divisibilityIntegralDomains-6",
  "level": "2",
  "url": "sec_quotientRings.html#exers_divisibilityIntegralDomains-6",
  "type": "Exercise",
  "number": "3.3.5.6",
  "title": "",
  "body": " The quotient ring is isomorphic to . Prove it by writing out all of the elements of the quotient ring and computing their addition and multiplication tables.  "
},
{
  "id": "exers_divisibilityIntegralDomains-7",
  "level": "2",
  "url": "sec_quotientRings.html#exers_divisibilityIntegralDomains-7",
  "type": "Exercise",
  "number": "3.3.5.7",
  "title": "",
  "body": " Finish the argument in that is a homomorphism.  "
},
{
  "id": "exers_divisibilityIntegralDomains-8",
  "level": "2",
  "url": "sec_quotientRings.html#exers_divisibilityIntegralDomains-8",
  "type": "Exercise",
  "number": "3.3.5.8",
  "title": "",
  "body": " In this exercise you will prove that . It will proceed in a sequence of steps.   Show that in we have .    Use the multiplicativity of the norm given by to prove that the non-zero elements in have norm divisible by : implies .    Show that the unique homomorphism defined by is in fact a homomorphism (or use a result to see it is).    Show that . Use (b) to prove that is the smallest positive integer such that .    Prove that is an epimorphism using coset arithmetic and then use the Noether isomorphism theorem to prove .     "
},
{
  "id": "exers_divisibilityIntegralDomains-9",
  "level": "2",
  "url": "sec_quotientRings.html#exers_divisibilityIntegralDomains-9",
  "type": "Exercise",
  "number": "3.3.5.9",
  "title": "",
  "body": " Ponder what happens in general with a quotient where is prime.  "
},
{
  "id": "exers_divisibilityIntegralDomains-10",
  "level": "2",
  "url": "sec_quotientRings.html#exers_divisibilityIntegralDomains-10",
  "type": "Exercise",
  "number": "3.3.5.10",
  "title": "",
  "body": " Let be a ring. Prove that for any , we have an isomorphism .  "
},
{
  "id": "exers_divisibilityIntegralDomains-11",
  "level": "2",
  "url": "sec_quotientRings.html#exers_divisibilityIntegralDomains-11",
  "type": "Exercise",
  "number": "3.3.5.11",
  "title": "",
  "body": " Suppose with . Define given by . That is, sends an equivalence class represented by to the equivalence class represented by .    Prove is well-defined: If are such that in , then in . This part uses the divsibility hypothesis.    Prove is a homomorphism.    Determine if is a monomorphism, epimorphism, and\/or isomorphism.    What is the kernel and what does the Noether Isomorphism tell us here?    "
},
{
  "id": "exers_divisibilityIntegralDomains-12",
  "level": "2",
  "url": "sec_quotientRings.html#exers_divisibilityIntegralDomains-12",
  "type": "Exercise",
  "number": "3.3.5.12",
  "title": "",
  "body": " Show that if and , then there cannot exist a homomorphism . Hint: Look at the image of the unity.  "
},
{
  "id": "exers_divisibilityIntegralDomains-13",
  "level": "2",
  "url": "sec_quotientRings.html#exers_divisibilityIntegralDomains-13",
  "type": "Exercise",
  "number": "3.3.5.13",
  "title": "",
  "body": " Consider the polynomial ring in two variables over . Elements here look like: where the subscript on tells us which monomial it is the coefficient of.  We can think of this polynomial ring as polynomial functions on where is the function .  The horizontal axis is defined by the polynomial equation . In this way we think of the horizontal axis as being the same as the polynomial . Prove that by defining a homomorphism by . Show that , which is just the evaluation at function, is an epimorphism. Then show that it's kernel is precisely . Deduce the desired isomorphism from the Noether Isomorphism Theorem.  "
},
{
  "id": "exers_divisibilityIntegralDomains-14",
  "level": "2",
  "url": "sec_quotientRings.html#exers_divisibilityIntegralDomains-14",
  "type": "Exercise",
  "number": "3.3.5.14",
  "title": "",
  "body": " Show that for and a field:   "
},
{
  "id": "exers_divisibilityIntegralDomains-15",
  "level": "2",
  "url": "sec_quotientRings.html#exers_divisibilityIntegralDomains-15",
  "type": "Exercise",
  "number": "3.3.5.15",
  "title": "",
  "body": " Prove . Do so by defining an epimorphism . Then show that and that any element in can be written as a linear coset: . Use this to deduce . Finally use the Noether Isomorphism Theorem to prove the desired isomorphism.  "
},
{
  "id": "exer_correspondenceTheorem",
  "level": "2",
  "url": "sec_quotientRings.html#exer_correspondenceTheorem",
  "type": "Exercise",
  "number": "3.3.5.16",
  "title": "Correspondence Theorem.",
  "body": "Correspondence Theorem  Prove the weak Correspondence Theorem: For any ideals and , there exists a unique ideal such that the image of under the quotient is . Hint: Set Show that is an ideal of , that it contains , that . Then prove that is unique.  "
},
{
  "id": "exers_divisibilityIntegralDomains-17",
  "level": "2",
  "url": "sec_quotientRings.html#exers_divisibilityIntegralDomains-17",
  "type": "Exercise",
  "number": "3.3.5.17",
  "title": "",
  "body": " Use the to find all ideals in . might be helpful too.  "
},
{
  "id": "sec_principalIdealDomains",
  "level": "1",
  "url": "sec_principalIdealDomains.html",
  "type": "Section",
  "number": "3.4",
  "title": "Principal Ideals Domains",
  "body": " Principal Ideals Domains   Guiding Questions   In this section, we'll seek to answer the questions:    What are principal ideal domains?  What are prime and maximal ideals and how can we use them?     The examples at the end of the last section were interesting. In particular, when we looked at the quotient of by . In this section, we aim to give more substance to the Noether Isomorphism theorem in two ways: We isolate a class of domains where ideals are always principal and we introduce two new types of ideals. We then use these ideas to study quotients of polynomials rings.    Principal Ideal Domains  In , and as we will see where is a field, ideals are particularly simple in that they are always principal. We first give domains satisfying that property a name.   Principal Ideal Domain  PID   An integral domain in which every ideal is principal is known as a principal ideal domain (PID) .      The ring is a principal ideal domain.    The zero ideal is principally generated by so we let be a non-zero ideal and show it is principally generated.  Consider . Since , there is . If , then . Otherwise so that (ideals are closed under multiplication). Thus is a non-empty subset of and so it has a least element . We claim .  Take any other element , which we assume is positive. Then the division algorithm tells us there exists with such that . But this would tell us and . Since is the least positive element of , this can only happen if and so and . Therefore .  We conclude that is a PID.    Notice that for any non-zero ideal of , the greatest common divisor of all the elements is a principal generator (the negative of it is too). We can use this to find the principal generator for ideals generated by more than one element:    Let be a principal ideal domain and be not both zero. Let . Then:    is an ideal, so there is some for which ;     is a greatest common divisor of and .     We conclude that there exist such that .     Observe that . Additionally, if , then , and . Thus, is an ideal.  Since is a PID, there exists such that . We claim that is a GCD of and .  It is clear that , as . Similarly, .  Now let be a common divisor of and . We wish to show that . Write and . Since , there exist such that , and thus .  In particular, there exist such that a GCD of and can be written as .   We have so far abstracted and axiomatized several important algebraic properties of that we discussed in § . In particular, we have our usual operations of addition and multiplication, and their interactions, we have notions of divisibility\/factorization, irreducibility, and primality; we also have cancellation and greatest common divisors.     Polynomial Rings over a Field  Our next goal is to prove that polynomial rings over a field are always a PID. In the course of the proof we will notice that such rings share a lot in common (factorization-wise) with integers. The key to factorization here is the degree function.  We start by proving any ideal (or any non-zero subset) of a polynomial ring has an element of least degree.    Let be a field and a set containing a nonzero polynomial. Prove that contains a polynomial such that for all nonzero .    Let . Since contains a nonzero polynomial, . By WOP, contains a minimal element , which must be the degree of some polynomial in .    Notice that in the proof of we did not use that was a field. In particular, we only need that there are non-zero polynomials, i.e. the coefficient ring is a non-zero ring.    Let be a field. Then the ring is a principal ideal domain.     Let be a nonzero ideal of and let be a non-zero polynomial of smallest degree. We claim .  We have as .  Let and use to write , where . As in Theorem , write . Since , the only way this can happen is if . Thus, and so . Hence, . In particular, and we have .  Thus any ideal in is principally generated and since is a domain, it is a principal ideal domain.   The proof of shows that to find a principal generated we need only look for a polynomial of minimal degree.    In this example, we will show how to give a purely algebraic construction of . What does it mean to algebraically construct ? We will take this to mean having access to a number system with that does not involve analytic constructions. That is, we will avoid using . Our starting algebraic system will be the rational numbers. If we had access to analysis, we could just allow the use of by throwing it into our set. We've encountered this field already: . Whatever we do should recover this field.  Consider the function given by . We have seen many times that is a homomorphism. Let us find it's kernel.  Since is a PID, the kernel is principally generated. Since , the kernel is non-zero and so it is principally generated by a non-zero polynomial. By the remark before this example, it is principally generated by a polynomial of least degree. Since , it is a candidate for the principal generator. We just need to see no elements of smaller degree are in the kernel.  To that end, suppose . Then If , then says is rational which is false. Thus and so too. We conclude that the kernel does not contain any terms of degrees zero or one. Hence, is a non-zero polynomial of smallest degree in the kernel. Thus .  The evaluation mapping is onto as for any we have Thus it is an epimorphism. By the Noether Isomorphism Theorem, we have an isomorphism: defined by .  The ring (field more precisely) relies on:   Constructing the rational numbers .    Constructing the polynomial ring over .    Modding out that polynomial ring by the principal ideal .   Each one of these steps is purely algebraic. The last step adds to by saying we want to add a symbol that squares to .      Prime Ideals  In this section, we continue return to our exploration of quotient rings by looking more closely at properties of ideals. We focus on particular properties of ideals that ensure that the quotient is either a domain or a field. Our examples will focus on the case is a PID.   Fraktur Font  The Fraktur font is a German typeface from the 16th century. It was long known as the German typeface . In 1941 it was banned by the Nazi government. It is usually used when denoting prime ( ) and maximal ( ) ideals. TBD    prime ideal  ideal (prime)   Let be a commutative ring and a proper ideal. We say is prime if whenever such that , we have or .    This definition arises by replacing divides with is contained in in the usual definition of prime element??? The following theorem shows that these definitions agree to the extent they can: prime elements generate prime ideals.    Let be a domain and be prime. Then is a prime ideal.    Suppose is a prime element of a domain and . Suppose a product is in , say . Then there exists with . Thus . Since is prime, either or .  Without loss of generality assume . Then there exists with . Hence, .      Which of the following ideals are prime?    in      in      in      in      in           Not prime. , but .    Prime. If , then and 11 is prime.    Prime. Easy explanation is that is isomorphic to . For now, though, we know that is irreducible, and is a PID, so irreducibles are prime.    Not prime. , but for degree reasons.    One may use the EA to show that , so . This is prime.       It is this precise condition that guarantees that the resulting quotient is a domain.    Let be a commutative ring and an ideal of . Then is prime if and only if is an integral domain.     Begin by assuming that is prime, and suppose . Then , and since is prime, either or . Thus either or .  Now assume that is a domain. Further, let be such that . Then , and since is a domain, or , i.e., or . Thus, is prime.     The ideal is a prime ideal of because the quotient is a field (in particular a domain).      The ideal is a prime ideal of because the quotient and is a domain.      The ideal is not a prime ideal of . Indeed, but .  Alternatively, in we have but . Thus is not a domain and consequently is not prime.      The ideal is a prime ideal of . Indeed, the mapping defined by is an epimorphism (exercise). This is nothing more than the reduce the constant term modulo 2 mapping.  The kernel of this mapping certainly contains as polynomials in are nothing more than the polynomials with even constant term, which reduces to 0 modulo 2. Any element not in has odd constant term. Thus it will not be in the kernel. Hence, and by the Noether Isomorphism Theorem . This is a field and so a domain. Thus is a prime ideal that is not principal.      Maximal Ideals  We now consider another important class of ideals: the maximal ideals.     Maximal ideal   maximal ideal  ideal (maximal)   Let be a commutative ring and let be a proper ideal. We say that is a maximal ideal if no proper ideal of properly contains . That is, if is an ideal satisfying , either or .    In other words, an ideal is maximal if no larger ideal (with respect to inclusion) properly contains it. As we will see later, rings can have many maximal ideals.  It is a fact that any ring with has a maximal ideal. This follows from Zorn's Lemma ; a rigorous exploration of Zorn's Lemma lies outside of the scope of this text, but suffice it to say that Zorn's Lemma is incredibly useful in all areas of algebra for proving existence theorems. For example, a proof that every vector space has a basis relies on Zorn's Lemma.  Rings with only one maximal ideal are said to be local rings , and are actively studied in modern research in commutative algebra (the study of commutative rings and their properties).  The next two results demonstrate that the maximality of is precisely the condition that guarantees that is a field.    Let be a commutative ring and a maximal ideal of . Let , and set . Then: is an ideal of such that . Thus there exist , such that .    Let be the set in question. Then as it is an ideal so . Take . Then: and since the sum is in . So is closed under addition.  For closure by multiplication by : Take then and since is an ideal we have so that . We conclude that is an ideal.  For the last two statements, we know that . Since and it cannot be that they are equal so that . By maximality, it must be that . Since there exists with for some .      Let be a commutative ring and an ideal of . Then is maximal if and only if is a field.    For the forward direction, apply the previous lemma to construct an inverse for given any .    If is a field, assume is an ideal of that properly contains . Let ; then is a nonzero element of , and since is a field, there is some such that . Since , . As , we have , and thus , which means . Thus, is maximal.  Now, suppose that is maximal and let . Apply the previous lemma to obtain , where . Then       Every maximal ideal is prime.    All fields are integral domains. Thus, if is maximal, is a field, thus a domain, and thus is prime.    In general, the converse is not true (see the Challenge below). However, it holds in sufficiently nice rings.    In a principal ideal domain, every prime ideal is maximal.    Let be a PID and a prime ideal. By previous work, is prime. Suppose that . Thus, , so . That is, . Since is prime and is a domain, it is irreducible. Thus, either or is a unit. If is a unit, then . If is a unit, then , and thus , which means that .  Thus, is maximal.      Describe the prime and maximal ideals of and .   For which ideals is a domain? A field? Similarly for . Or, use .  TBD    Challenge   Find a commutative ring , , and a nonmaximal prime ideal of .    In , it is straightforward to see that is prime ( ). Moreover, , and thus is not maximal.       Mark the following as true or false.    Let be a field, then is a PID.    Let be a field, then is a PID.    The ring of integers is a PID.    The domain is a PID.    Every prime ideal is maximal.    Every maximal ideal is prime.    Every prime ideal is maximal in a PID.    Every irreducible element in a ring is prime.    Every irreducible element in a PID is prime.      Find an integer such that , if                        You do not need to prove that each of the sets above are ideals (though you should make sure you can do it).    Let be an ideal in the ring . Find a polynomial such that , if                   You do not need to prove that each of the sets above are ideals (though you should make sure you can do it).    Let be a non-zero ideal in . Show that , where is the greatest common divisor of all the non-zero elements of .    Let be a non-zero ideal in where is a field. Show that , where is a greatest common divisor of all the non-zero elements of .    Determine if the following ideals in the corresponding ring are prime and\/or maximal or neither.                                              Let be a domain and a principal ideal. Prove the converse of . That is, prove that if is a prime ideal, then is a prime element.    Prove that the homomorphism in is in fact a homomorphism and is onto.    Generalize by showing that the in is prime if and only if is a prime number.    Consider the principal ideal in . Prove that is prime but not maximal. Hint: Show that is a larger ideal that is still proper.    Prove that so that the ideal from the previous example is a maximal ideal containing .    Prove that is a field. Then write out the multiplication and addition tables.    Prove that is not a field but is a field. Write out the multiplication and addition tables for the latter.    Let be a commutative ring. Prove that the zero ideal is prime if and only if is a domain.   Division Algorithm for Gaussian Integers  Let be the Gaussian integers. Given , not both zero, show there exists (not necessarily unique) with where . Here, . Do so as follows:    Divide by in to get where .    Choose integers such that . Then argue     Show that if and , then and       Prove that is a PID by:    Let be a non-zero ideal. Show there exists an element of minimal norm. Here, the norm is .    Argue that .    For the reverse containment, use the division algorithm for in the previous problem.    Deduce that is a PID.      Prove that is a prime ideal in . Identify with a subfield of .    Prove that is a prime ideal in . Identify with a subfield of .    Prove that if is prime, then where .    Find all ideals such that .    "
},
{
  "id": "obj_principalIdealsEuclideanDomains",
  "level": "2",
  "url": "sec_principalIdealDomains.html#obj_principalIdealsEuclideanDomains",
  "type": "Guiding Questions",
  "number": "3.4",
  "title": "Guiding Questions",
  "body": " Guiding Questions   In this section, we'll seek to answer the questions:    What are principal ideal domains?  What are prime and maximal ideals and how can we use them?   "
},
{
  "id": "ssec_principalIdealDomains-3",
  "level": "2",
  "url": "sec_principalIdealDomains.html#ssec_principalIdealDomains-3",
  "type": "Definition",
  "number": "3.4.1",
  "title": "",
  "body": " Principal Ideal Domain  PID   An integral domain in which every ideal is principal is known as a principal ideal domain (PID) .   "
},
{
  "id": "thm_ZisPID",
  "level": "2",
  "url": "sec_principalIdealDomains.html#thm_ZisPID",
  "type": "Theorem",
  "number": "3.4.2",
  "title": "",
  "body": "  The ring is a principal ideal domain.    The zero ideal is principally generated by so we let be a non-zero ideal and show it is principally generated.  Consider . Since , there is . If , then . Otherwise so that (ideals are closed under multiplication). Thus is a non-empty subset of and so it has a least element . We claim .  Take any other element , which we assume is positive. Then the division algorithm tells us there exists with such that . But this would tell us and . Since is the least positive element of , this can only happen if and so and . Therefore .  We conclude that is a PID.   "
},
{
  "id": "ssec_principalIdealDomains-6",
  "level": "2",
  "url": "sec_principalIdealDomains.html#ssec_principalIdealDomains-6",
  "type": "Theorem",
  "number": "3.4.3",
  "title": "",
  "body": "  Let be a principal ideal domain and be not both zero. Let . Then:    is an ideal, so there is some for which ;     is a greatest common divisor of and .     We conclude that there exist such that .   "
},
{
  "id": "ssec_principalIdealDomains-7",
  "level": "2",
  "url": "sec_principalIdealDomains.html#ssec_principalIdealDomains-7",
  "type": "Proof",
  "number": "3.4.1.1",
  "title": "",
  "body": " Observe that . Additionally, if , then , and . Thus, is an ideal.  Since is a PID, there exists such that . We claim that is a GCD of and .  It is clear that , as . Similarly, .  Now let be a common divisor of and . We wish to show that . Write and . Since , there exist such that , and thus .  In particular, there exist such that a GCD of and can be written as .  "
},
{
  "id": "lem_minimalDegreePoly",
  "level": "2",
  "url": "sec_principalIdealDomains.html#lem_minimalDegreePoly",
  "type": "Lemma",
  "number": "3.4.4",
  "title": "",
  "body": "  Let be a field and a set containing a nonzero polynomial. Prove that contains a polynomial such that for all nonzero .    Let . Since contains a nonzero polynomial, . By WOP, contains a minimal element , which must be the degree of some polynomial in .   "
},
{
  "id": "thm_polynomialsOverFieldArePID",
  "level": "2",
  "url": "sec_principalIdealDomains.html#thm_polynomialsOverFieldArePID",
  "type": "Theorem",
  "number": "3.4.5",
  "title": "",
  "body": "  Let be a field. Then the ring is a principal ideal domain.   "
},
{
  "id": "ssec_polynomialRingsOverAField-7",
  "level": "2",
  "url": "sec_principalIdealDomains.html#ssec_polynomialRingsOverAField-7",
  "type": "Proof",
  "number": "3.4.2.1",
  "title": "",
  "body": " Let be a nonzero ideal of and let be a non-zero polynomial of smallest degree. We claim .  We have as .  Let and use to write , where . As in Theorem , write . Since , the only way this can happen is if . Thus, and so . Hence, . In particular, and we have .  Thus any ideal in is principally generated and since is a domain, it is a principal ideal domain.  "
},
{
  "id": "ssec_polynomialRingsOverAField-9",
  "level": "2",
  "url": "sec_principalIdealDomains.html#ssec_polynomialRingsOverAField-9",
  "type": "Example",
  "number": "3.4.6",
  "title": "",
  "body": "  In this example, we will show how to give a purely algebraic construction of . What does it mean to algebraically construct ? We will take this to mean having access to a number system with that does not involve analytic constructions. That is, we will avoid using . Our starting algebraic system will be the rational numbers. If we had access to analysis, we could just allow the use of by throwing it into our set. We've encountered this field already: . Whatever we do should recover this field.  Consider the function given by . We have seen many times that is a homomorphism. Let us find it's kernel.  Since is a PID, the kernel is principally generated. Since , the kernel is non-zero and so it is principally generated by a non-zero polynomial. By the remark before this example, it is principally generated by a polynomial of least degree. Since , it is a candidate for the principal generator. We just need to see no elements of smaller degree are in the kernel.  To that end, suppose . Then If , then says is rational which is false. Thus and so too. We conclude that the kernel does not contain any terms of degrees zero or one. Hence, is a non-zero polynomial of smallest degree in the kernel. Thus .  The evaluation mapping is onto as for any we have Thus it is an epimorphism. By the Noether Isomorphism Theorem, we have an isomorphism: defined by .  The ring (field more precisely) relies on:   Constructing the rational numbers .    Constructing the polynomial ring over .    Modding out that polynomial ring by the principal ideal .   Each one of these steps is purely algebraic. The last step adds to by saying we want to add a symbol that squares to .   "
},
{
  "id": "ssec_primeIdeals-4",
  "level": "2",
  "url": "sec_principalIdealDomains.html#ssec_primeIdeals-4",
  "type": "Definition",
  "number": "3.4.7",
  "title": "",
  "body": " prime ideal  ideal (prime)   Let be a commutative ring and a proper ideal. We say is prime if whenever such that , we have or .   "
},
{
  "id": "thm_primeElementGeneratesPrimeIdeal",
  "level": "2",
  "url": "sec_principalIdealDomains.html#thm_primeElementGeneratesPrimeIdeal",
  "type": "Theorem",
  "number": "3.4.8",
  "title": "",
  "body": "  Let be a domain and be prime. Then is a prime ideal.    Suppose is a prime element of a domain and . Suppose a product is in , say . Then there exists with . Thus . Since is prime, either or .  Without loss of generality assume . Then there exists with . Hence, .   "
},
{
  "id": "ssec_primeIdeals-7",
  "level": "2",
  "url": "sec_principalIdealDomains.html#ssec_primeIdeals-7",
  "type": "Activity",
  "number": "3.4.1",
  "title": "",
  "body": "  Which of the following ideals are prime?    in      in      in      in      in           Not prime. , but .    Prime. If , then and 11 is prime.    Prime. Easy explanation is that is isomorphic to . For now, though, we know that is irreducible, and is a PID, so irreducibles are prime.    Not prime. , but for degree reasons.    One may use the EA to show that , so . This is prime.      "
},
{
  "id": "thm_quotientByPrimeIsDomain",
  "level": "2",
  "url": "sec_principalIdealDomains.html#thm_quotientByPrimeIsDomain",
  "type": "Theorem",
  "number": "3.4.9",
  "title": "",
  "body": "  Let be a commutative ring and an ideal of . Then is prime if and only if is an integral domain.   "
},
{
  "id": "ssec_primeIdeals-10",
  "level": "2",
  "url": "sec_principalIdealDomains.html#ssec_primeIdeals-10",
  "type": "Proof",
  "number": "3.4.3.1",
  "title": "",
  "body": " Begin by assuming that is prime, and suppose . Then , and since is prime, either or . Thus either or .  Now assume that is a domain. Further, let be such that . Then , and since is a domain, or , i.e., or . Thus, is prime.  "
},
{
  "id": "ssec_primeIdeals-11",
  "level": "2",
  "url": "sec_principalIdealDomains.html#ssec_primeIdeals-11",
  "type": "Example",
  "number": "3.4.10",
  "title": "",
  "body": "  The ideal is a prime ideal of because the quotient is a field (in particular a domain).   "
},
{
  "id": "ssec_primeIdeals-12",
  "level": "2",
  "url": "sec_principalIdealDomains.html#ssec_primeIdeals-12",
  "type": "Example",
  "number": "3.4.11",
  "title": "",
  "body": "  The ideal is a prime ideal of because the quotient and is a domain.   "
},
{
  "id": "ssec_primeIdeals-13",
  "level": "2",
  "url": "sec_principalIdealDomains.html#ssec_primeIdeals-13",
  "type": "Example",
  "number": "3.4.12",
  "title": "",
  "body": "  The ideal is not a prime ideal of . Indeed, but .  Alternatively, in we have but . Thus is not a domain and consequently is not prime.   "
},
{
  "id": "ex_nonprincipalPrimeIdeal",
  "level": "2",
  "url": "sec_principalIdealDomains.html#ex_nonprincipalPrimeIdeal",
  "type": "Example",
  "number": "3.4.13",
  "title": "",
  "body": "  The ideal is a prime ideal of . Indeed, the mapping defined by is an epimorphism (exercise). This is nothing more than the reduce the constant term modulo 2 mapping.  The kernel of this mapping certainly contains as polynomials in are nothing more than the polynomials with even constant term, which reduces to 0 modulo 2. Any element not in has odd constant term. Thus it will not be in the kernel. Hence, and by the Noether Isomorphism Theorem . This is a field and so a domain. Thus is a prime ideal that is not principal.   "
},
{
  "id": "ssec_maximalIdeals-3",
  "level": "2",
  "url": "sec_principalIdealDomains.html#ssec_maximalIdeals-3",
  "type": "Definition",
  "number": "3.4.14",
  "title": "",
  "body": "   Maximal ideal   maximal ideal  ideal (maximal)   Let be a commutative ring and let be a proper ideal. We say that is a maximal ideal if no proper ideal of properly contains . That is, if is an ideal satisfying , either or .   "
},
{
  "id": "ssec_maximalIdeals-8",
  "level": "2",
  "url": "sec_principalIdealDomains.html#ssec_maximalIdeals-8",
  "type": "Lemma",
  "number": "3.4.15",
  "title": "",
  "body": "  Let be a commutative ring and a maximal ideal of . Let , and set . Then: is an ideal of such that . Thus there exist , such that .    Let be the set in question. Then as it is an ideal so . Take . Then: and since the sum is in . So is closed under addition.  For closure by multiplication by : Take then and since is an ideal we have so that . We conclude that is an ideal.  For the last two statements, we know that . Since and it cannot be that they are equal so that . By maximality, it must be that . Since there exists with for some .   "
},
{
  "id": "ssec_maximalIdeals-9",
  "level": "2",
  "url": "sec_principalIdealDomains.html#ssec_maximalIdeals-9",
  "type": "Theorem",
  "number": "3.4.16",
  "title": "",
  "body": "  Let be a commutative ring and an ideal of . Then is maximal if and only if is a field.    For the forward direction, apply the previous lemma to construct an inverse for given any .    If is a field, assume is an ideal of that properly contains . Let ; then is a nonzero element of , and since is a field, there is some such that . Since , . As , we have , and thus , which means . Thus, is maximal.  Now, suppose that is maximal and let . Apply the previous lemma to obtain , where . Then    "
},
{
  "id": "ssec_maximalIdeals-10",
  "level": "2",
  "url": "sec_principalIdealDomains.html#ssec_maximalIdeals-10",
  "type": "Theorem",
  "number": "3.4.17",
  "title": "",
  "body": "  Every maximal ideal is prime.    All fields are integral domains. Thus, if is maximal, is a field, thus a domain, and thus is prime.   "
},
{
  "id": "thm-pid-primes-are-maximal",
  "level": "2",
  "url": "sec_principalIdealDomains.html#thm-pid-primes-are-maximal",
  "type": "Theorem",
  "number": "3.4.18",
  "title": "",
  "body": "  In a principal ideal domain, every prime ideal is maximal.    Let be a PID and a prime ideal. By previous work, is prime. Suppose that . Thus, , so . That is, . Since is prime and is a domain, it is irreducible. Thus, either or is a unit. If is a unit, then . If is a unit, then , and thus , which means that .  Thus, is maximal.   "
},
{
  "id": "ssec_maximalIdeals-13",
  "level": "2",
  "url": "sec_principalIdealDomains.html#ssec_maximalIdeals-13",
  "type": "Exploration",
  "number": "3.4.2",
  "title": "",
  "body": "  Describe the prime and maximal ideals of and .   For which ideals is a domain? A field? Similarly for . Or, use .  TBD  "
},
{
  "id": "challenge-nonmaximal-prime",
  "level": "2",
  "url": "sec_principalIdealDomains.html#challenge-nonmaximal-prime",
  "type": "Exploration",
  "number": "3.4.3",
  "title": "Challenge.",
  "body": " Challenge   Find a commutative ring , , and a nonmaximal prime ideal of .    In , it is straightforward to see that is prime ( ). Moreover, , and thus is not maximal.   "
},
{
  "id": "exers_principalIdealDomains-1",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-1",
  "type": "Exercise",
  "number": "3.4.5.1",
  "title": "",
  "body": " Mark the following as true or false.    Let be a field, then is a PID.    Let be a field, then is a PID.    The ring of integers is a PID.    The domain is a PID.    Every prime ideal is maximal.    Every maximal ideal is prime.    Every prime ideal is maximal in a PID.    Every irreducible element in a ring is prime.    Every irreducible element in a PID is prime.    "
},
{
  "id": "exers_principalIdealDomains-2",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-2",
  "type": "Exercise",
  "number": "3.4.5.2",
  "title": "",
  "body": " Find an integer such that , if                        You do not need to prove that each of the sets above are ideals (though you should make sure you can do it).  "
},
{
  "id": "exers_principalIdealDomains-3",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-3",
  "type": "Exercise",
  "number": "3.4.5.3",
  "title": "",
  "body": " Let be an ideal in the ring . Find a polynomial such that , if                   You do not need to prove that each of the sets above are ideals (though you should make sure you can do it).  "
},
{
  "id": "exers_principalIdealDomains-4",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-4",
  "type": "Exercise",
  "number": "3.4.5.4",
  "title": "",
  "body": " Let be a non-zero ideal in . Show that , where is the greatest common divisor of all the non-zero elements of .  "
},
{
  "id": "exers_principalIdealDomains-5",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-5",
  "type": "Exercise",
  "number": "3.4.5.5",
  "title": "",
  "body": " Let be a non-zero ideal in where is a field. Show that , where is a greatest common divisor of all the non-zero elements of .  "
},
{
  "id": "exers_principalIdealDomains-6",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-6",
  "type": "Exercise",
  "number": "3.4.5.6",
  "title": "",
  "body": " Determine if the following ideals in the corresponding ring are prime and\/or maximal or neither.                                            "
},
{
  "id": "exers_principalIdealDomains-7",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-7",
  "type": "Exercise",
  "number": "3.4.5.7",
  "title": "",
  "body": " Let be a domain and a principal ideal. Prove the converse of . That is, prove that if is a prime ideal, then is a prime element.  "
},
{
  "id": "exers_principalIdealDomains-8",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-8",
  "type": "Exercise",
  "number": "3.4.5.8",
  "title": "",
  "body": " Prove that the homomorphism in is in fact a homomorphism and is onto.  "
},
{
  "id": "exers_principalIdealDomains-9",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-9",
  "type": "Exercise",
  "number": "3.4.5.9",
  "title": "",
  "body": " Generalize by showing that the in is prime if and only if is a prime number.  "
},
{
  "id": "exers_principalIdealDomains-10",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-10",
  "type": "Exercise",
  "number": "3.4.5.10",
  "title": "",
  "body": " Consider the principal ideal in . Prove that is prime but not maximal. Hint: Show that is a larger ideal that is still proper.  "
},
{
  "id": "exers_principalIdealDomains-11",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-11",
  "type": "Exercise",
  "number": "3.4.5.11",
  "title": "",
  "body": " Prove that so that the ideal from the previous example is a maximal ideal containing .  "
},
{
  "id": "exers_principalIdealDomains-12",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-12",
  "type": "Exercise",
  "number": "3.4.5.12",
  "title": "",
  "body": " Prove that is a field. Then write out the multiplication and addition tables.  "
},
{
  "id": "exers_principalIdealDomains-13",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-13",
  "type": "Exercise",
  "number": "3.4.5.13",
  "title": "",
  "body": " Prove that is not a field but is a field. Write out the multiplication and addition tables for the latter.  "
},
{
  "id": "exers_principalIdealDomains-14",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-14",
  "type": "Exercise",
  "number": "3.4.5.14",
  "title": "",
  "body": " Let be a commutative ring. Prove that the zero ideal is prime if and only if is a domain.  "
},
{
  "id": "exer_divisionAlgorithmGaussianIntegers",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exer_divisionAlgorithmGaussianIntegers",
  "type": "Exercise",
  "number": "3.4.5.15",
  "title": "Division Algorithm for Gaussian Integers.",
  "body": "Division Algorithm for Gaussian Integers  Let be the Gaussian integers. Given , not both zero, show there exists (not necessarily unique) with where . Here, . Do so as follows:    Divide by in to get where .    Choose integers such that . Then argue     Show that if and , then and     "
},
{
  "id": "exers_principalIdealDomains-16",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-16",
  "type": "Exercise",
  "number": "3.4.5.16",
  "title": "",
  "body": " Prove that is a PID by:    Let be a non-zero ideal. Show there exists an element of minimal norm. Here, the norm is .    Argue that .    For the reverse containment, use the division algorithm for in the previous problem.    Deduce that is a PID.    "
},
{
  "id": "exers_principalIdealDomains-17",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-17",
  "type": "Exercise",
  "number": "3.4.5.17",
  "title": "",
  "body": " Prove that is a prime ideal in . Identify with a subfield of .  "
},
{
  "id": "exers_principalIdealDomains-18",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-18",
  "type": "Exercise",
  "number": "3.4.5.18",
  "title": "",
  "body": " Prove that is a prime ideal in . Identify with a subfield of .  "
},
{
  "id": "exers_principalIdealDomains-19",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-19",
  "type": "Exercise",
  "number": "3.4.5.19",
  "title": "",
  "body": " Prove that if is prime, then where .  "
},
{
  "id": "exers_principalIdealDomains-20",
  "level": "2",
  "url": "sec_principalIdealDomains.html#exers_principalIdealDomains-20",
  "type": "Exercise",
  "number": "3.4.5.20",
  "title": "",
  "body": " Find all ideals such that .  "
},
{
  "id": "sec_factoringPolynomials",
  "level": "1",
  "url": "sec_factoringPolynomials.html",
  "type": "Section",
  "number": "4.1",
  "title": "Factoring Polynomials",
  "body": " Factoring Polynomials   Guiding Questions   In this section, we'll seek to answer the questions:    What is an irreducible polynomial? Are there any tools we can use to determine if a given polynomial is irreducible?    One of the most beautiful consequences of an abstract study of algebra is the fact that both and are Euclidean domains. While they are not the same , we can expect them to share many of the same properties. In this section, our first goal will be to extend familiar properties from to . We will also see that particular features of a polynomial (e.g., its degree, or the existence of roots) allows for additional criteria for its irreducibility to be decided.  Since both and have a division algorithm, it is reasonable to expect that, similar to the integers, we can also investigate the greatest common divisor of polynomials. In fact, our method for finding the greatest common divisor of two integers extends nicely to polynomials.    Given , state a conjecture that gives a means for finding . Prove your conjecture is correct.    The Euclidean algorithm! Apply the division algorithm for polynomials and mimic the proof of the Euclidean algorithm in .      Carefully state and prove a Bézout-like theorem (recall Theorem ) for polynomials in .    Let such that and are not both the zero polynomial. Then there exist polynomials such that .    One of the most useful things we can do with polynomials is evaluate them by plugging in elements from our coefficient set (or some superset that contains it) and performing the resulting arithmetic in an appropriate ring. We can make this completely rigorous using the language of functions: given a commutative ring and all polynomials , we define the function by . However, we will not belabor this point; instead, we will generally write in place of and appeal to our common notions of evaluating polynomials.  Given a polynomial , we have frequently been interested in finding all for which .     zero (of a polynomial)  root   Let be commutative with identity and suppose . We say is a zero or root of if .    When considering polynomials with integer coefficients, any rational roots are particularly well-behaved.    Let with . If such that , and , then and .   TBD.     Use to find the possible rational roots of . Which of the possibilities you found are actually roots? Justify.    TBD.     gave a condition to check to see if polynomials in had roots in . However, the lack of a rational root for a polynomial is not sufficient to say that a polynomial is irreducible in according to .    Find a polynomial that has no roots in but is nonetheless reducible over .    Any polynomial with a nonunit integer factor will do, such as .    To simplify matters, we will focus henceforth on polynomials with coefficients in a field. The following theorem is a result that you learned in high school algebra (and have likely used countless times since then), but as with the other familiar topics we have explored so far, it is necessary to formalize prior to continuing.   Factor Theorem   Let be a field, and . Then is a root of if and only if divides .    If divides , then and , so is a root.  Otherwise, use the division algorithm to divide by . Then , where . Thus, is a nonzero constant. If is a root of , then , so and .    Note that while is a ring, and we already have a definition of an irreducible element of a ring, we will find it useful to have a ready definition of irreducible in the context of polynomials with coefficients in a field. It is to that task that we now turn.   irreducible (polynomial)   Given a field , define an irreducible element of , keeping in view Theorem and Definition . What are the units in ?     An irreducible polynomial is a nonzero nonconstant such that whenever , where , either or is a nonzero constant.     reducible (polynomial)   A polynomial is reducible if it is not irreducible.      State a positive definition for a reducible polynomial with coefficients in a field . That is, state a definition which does not refer to the notion of irreducibility.    A polynomial is reducible if it can be written as , where and .      Every polynomial of degree 1 in is irreducible.    Let be degree 1 and write . Then . Since , one of or is 0, hence or is constant.      A nonconstant polynomial of degree 2 or 3 is irreducible over if and only if it has no zeros in .    We prove the double contrapositive: of degree 2 or 3 is reducible if and only if it has a zero in .  If is reducible there exist nonconstant such that . Since or 3, one of or has degree 1, and is thus of the form , where . Thus, has a zero.  Similarly, if has a zero , , where . Thus, is reducible over .    The preceding theorems allow us to explore the (ir)reducibility of polynomials of small degree with coefficients in any field .    Determine which of the following polynomials are irreducible over the given fields. Justify your answer.    Over :   ,  ,  ,  ,  .    Over :   ,  ,  ,  ,  ,  ,  .       TBD.    As the following theorem illustrates, in , all irreducibles are primes.    Let be a field and such that is irreducible and divides . Then divides or divides .    Assume does not divede . Then and . Multiplying by yields which implies that divides (since divides ) .    We next state the Fundamental Theorem of Algebra. Despite its name, its proof relies on analytic properties of the real numbers; there is no purely algebraic proof. Moreover, it is not essential for the work we do in following sections, but given its close relationship to the question of factorization, we include it here for completeness.   Fundamental Theorem of Algebra  Fundamental Theorem of Algebra   Every nonconstant polynomial with coefficients in has a root in .    We conclude with one consequence of the Fundamental Theorem of Algebra.    Every nonconstant polynomial in can be written as a product of linear polynomials.    What are the irreducibles in ?     Induction on degree of polynomial using previous theorem.   Thus, the multiplicative structure of is straightforward: everything can be factored as a product of linear polynomials. Fields of coefficients like for which this is true are said to be algebraically closed ; not all fields satisfy this property. For instance, does not factor into a product of linear polynomials. Consequently, is not algebraically closed.  However, regardless of whether our field is algebraically closed, we have not yet determined that any can be factored uniquely into a product of irreducibles, or even that such factorizations into irreducibles exist. In , we do just that.  "
},
{
  "id": "obj_factoringPolynomials",
  "level": "2",
  "url": "sec_factoringPolynomials.html#obj_factoringPolynomials",
  "type": "Guiding Questions",
  "number": "4.1",
  "title": "Guiding Questions",
  "body": " Guiding Questions   In this section, we'll seek to answer the questions:    What is an irreducible polynomial? Are there any tools we can use to determine if a given polynomial is irreducible?   "
},
{
  "id": "sec_factoringPolynomials-5",
  "level": "2",
  "url": "sec_factoringPolynomials.html#sec_factoringPolynomials-5",
  "type": "Investigation",
  "number": "4.1.1",
  "title": "",
  "body": "  Given , state a conjecture that gives a means for finding . Prove your conjecture is correct.    The Euclidean algorithm! Apply the division algorithm for polynomials and mimic the proof of the Euclidean algorithm in .   "
},
{
  "id": "sec_factoringPolynomials-6",
  "level": "2",
  "url": "sec_factoringPolynomials.html#sec_factoringPolynomials-6",
  "type": "Investigation",
  "number": "4.1.2",
  "title": "",
  "body": "  Carefully state and prove a Bézout-like theorem (recall Theorem ) for polynomials in .    Let such that and are not both the zero polynomial. Then there exist polynomials such that .   "
},
{
  "id": "sec_factoringPolynomials-9",
  "level": "2",
  "url": "sec_factoringPolynomials.html#sec_factoringPolynomials-9",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": " zero (of a polynomial)  root   Let be commutative with identity and suppose . We say is a zero or root of if .   "
},
{
  "id": "thm-rational-root",
  "level": "2",
  "url": "sec_factoringPolynomials.html#thm-rational-root",
  "type": "Theorem",
  "number": "4.1.2",
  "title": "",
  "body": "  Let with . If such that , and , then and .   TBD.  "
},
{
  "id": "sec_factoringPolynomials-12",
  "level": "2",
  "url": "sec_factoringPolynomials.html#sec_factoringPolynomials-12",
  "type": "Activity",
  "number": "4.1.3",
  "title": "",
  "body": "  Use to find the possible rational roots of . Which of the possibilities you found are actually roots? Justify.    TBD.   "
},
{
  "id": "sec_factoringPolynomials-14",
  "level": "2",
  "url": "sec_factoringPolynomials.html#sec_factoringPolynomials-14",
  "type": "Activity",
  "number": "4.1.4",
  "title": "",
  "body": "  Find a polynomial that has no roots in but is nonetheless reducible over .    Any polynomial with a nonunit integer factor will do, such as .   "
},
{
  "id": "sec_factoringPolynomials-16",
  "level": "2",
  "url": "sec_factoringPolynomials.html#sec_factoringPolynomials-16",
  "type": "Theorem",
  "number": "4.1.3",
  "title": "Factor Theorem.",
  "body": " Factor Theorem   Let be a field, and . Then is a root of if and only if divides .    If divides , then and , so is a root.  Otherwise, use the division algorithm to divide by . Then , where . Thus, is a nonzero constant. If is a root of , then , so and .   "
},
{
  "id": "sec_factoringPolynomials-18",
  "level": "2",
  "url": "sec_factoringPolynomials.html#sec_factoringPolynomials-18",
  "type": "Exploration",
  "number": "4.1.5",
  "title": "",
  "body": " irreducible (polynomial)   Given a field , define an irreducible element of , keeping in view Theorem and Definition . What are the units in ?     An irreducible polynomial is a nonzero nonconstant such that whenever , where , either or is a nonzero constant.   "
},
{
  "id": "sec_factoringPolynomials-19",
  "level": "2",
  "url": "sec_factoringPolynomials.html#sec_factoringPolynomials-19",
  "type": "Definition",
  "number": "4.1.4",
  "title": "",
  "body": " reducible (polynomial)   A polynomial is reducible if it is not irreducible.   "
},
{
  "id": "sec_factoringPolynomials-20",
  "level": "2",
  "url": "sec_factoringPolynomials.html#sec_factoringPolynomials-20",
  "type": "Exploration",
  "number": "4.1.6",
  "title": "",
  "body": "  State a positive definition for a reducible polynomial with coefficients in a field . That is, state a definition which does not refer to the notion of irreducibility.    A polynomial is reducible if it can be written as , where and .   "
},
{
  "id": "sec_factoringPolynomials-21",
  "level": "2",
  "url": "sec_factoringPolynomials.html#sec_factoringPolynomials-21",
  "type": "Theorem",
  "number": "4.1.5",
  "title": "",
  "body": "  Every polynomial of degree 1 in is irreducible.    Let be degree 1 and write . Then . Since , one of or is 0, hence or is constant.   "
},
{
  "id": "sec_factoringPolynomials-22",
  "level": "2",
  "url": "sec_factoringPolynomials.html#sec_factoringPolynomials-22",
  "type": "Theorem",
  "number": "4.1.6",
  "title": "",
  "body": "  A nonconstant polynomial of degree 2 or 3 is irreducible over if and only if it has no zeros in .    We prove the double contrapositive: of degree 2 or 3 is reducible if and only if it has a zero in .  If is reducible there exist nonconstant such that . Since or 3, one of or has degree 1, and is thus of the form , where . Thus, has a zero.  Similarly, if has a zero , , where . Thus, is reducible over .   "
},
{
  "id": "sec_factoringPolynomials-24",
  "level": "2",
  "url": "sec_factoringPolynomials.html#sec_factoringPolynomials-24",
  "type": "Activity",
  "number": "4.1.7",
  "title": "",
  "body": "  Determine which of the following polynomials are irreducible over the given fields. Justify your answer.    Over :   ,  ,  ,  ,  .    Over :   ,  ,  ,  ,  ,  ,  .       TBD.   "
},
{
  "id": "sec_factoringPolynomials-26",
  "level": "2",
  "url": "sec_factoringPolynomials.html#sec_factoringPolynomials-26",
  "type": "Theorem",
  "number": "4.1.7",
  "title": "",
  "body": "  Let be a field and such that is irreducible and divides . Then divides or divides .    Assume does not divede . Then and . Multiplying by yields which implies that divides (since divides ) .   "
},
{
  "id": "sec_factoringPolynomials-30",
  "level": "2",
  "url": "sec_factoringPolynomials.html#sec_factoringPolynomials-30",
  "type": "Theorem",
  "number": "4.1.8",
  "title": "",
  "body": "  Every nonconstant polynomial in can be written as a product of linear polynomials.    What are the irreducibles in ?   "
},
{
  "id": "sec_factoringPolynomials-31",
  "level": "2",
  "url": "sec_factoringPolynomials.html#sec_factoringPolynomials-31",
  "type": "Proof",
  "number": "4.1.1",
  "title": "",
  "body": " Induction on degree of polynomial using previous theorem.  "
},
{
  "id": "sec_factoringPolynomials-32",
  "level": "2",
  "url": "sec_factoringPolynomials.html#sec_factoringPolynomials-32",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "algebraically closed "
},
{
  "id": "sec_factorizationEuclideanDomains",
  "level": "1",
  "url": "sec_factorizationEuclideanDomains.html",
  "type": "Section",
  "number": "4.2",
  "title": "Factorization in Euclidean Domains",
  "body": " Factorization in Euclidean Domains   Guiding Questions   In this section, we'll seek to answer the questions:    What is a unique factorization domain? What examples of UFDs do we possess?  What is the ascending chain condition on ideals? What are Noetherian rings?  What does the ascending chain condition have to do with unique factorization?     In this section, our explorations of the structural arithmetic properties that guarantee unique factorization culminate in . Specifically, we'll see that all Euclidean domains possess the unique factorization property. To prove this theorem, we will rely in part on an interesting property of chains of ideals in Euclidean domains.    Unique Factorization Domains  We begin by describing exactly what we mean by unique factorization. The reader may find it helpful to compare to The Fundamental Theorem of Arithmetic .   unique factorization domain (UFD)   An integral domain is called a unique factorization domain (or UFD ) if the following conditions hold.   Every nonzero nonunit element of is either irreducible or can be written as a finite product of irreducibles in .    Factorization into irreducibles is unique up to associates. That is, if can be written as for some irreducibles , then and, after reordering, is an associate of .         Using as an example, illustrate the definition of UFD by factoring 20 into two sets of different irreducibles which nonetheless can be paired up as associates.    We are already familiar with several examples.    The integers form a UFD.   We have already seen that primes and irreducibles coincide in (see and ). The result follows from the Fundamental Theorem of Algebra.     Every field is a UFD.   There are no nonzero nonunits in a field. The UFD conditions are therefore trivially satisfied.     The Ascending Chain Condition and Noetherian Rings  We now set our sights on a proof of . In order to prove it, we will make use of an important property of ideals in Euclidean domains. First, a definition.    A commutative ring is called Noetherian if it satisfies the ascending chain condition on ideals. These rings are named in honor of Emmy Noether , one of the preeminent mathematicians of the 20th century. In addition to making substantial contributions to physics, she formalized the axiomatic definition of ring that is still in use today. That is, is Noetherian if whenever is an ascending chain of ideals in , then there exists some for which .      Consider the ideals in and . Find the longest ascending chains of ideals starting first with and then with that you can. When does each chain stabilize?   TBD.   We next show that every PID is Noetherian.    Every principal ideal domain is Noetherian.    Let and set . Show that is an ideal, and use your assumptions!    It is a straightforward definition check to see that as defined in the hint is an ideal. That we are in a PID means there exists such that . Therefore there exists such that . It follows that and in particular that for all .      Every Euclidean domain is Noetherian.    Every ED is a PID.      Euclidean Domains are UFDs  We now begin collecting results to prove that every Euclidean domain is a UFD. The first condition in the UFD definition is that every nonzero nonunit factors as a product of irreducibles. We first show that every nonzero nonunit is divisible by at least one irreducible ( ), which we apply to show that every nonzero nonunit can be written as a finite product of irreducibles ( ).    Let be a principal ideal domain, and a nonzero nonunit. Then is divisible by an irreducible.    Let be reducible and write . Continue to factor reducibles and build an ascending chain of ideals.    Suppose that is not irreducible. Write , where the are nonzero nonunits. Then . If is not irreducible, we may write , where are nonzero nonunits, and observe that .  (If  is irreducible and we nonetheless write , then either if is a unit, or if is associate to .)  Continuing in this way, we may continue to factor the reducible factors of ; since is a PID and thus has the ascending chain condition, we must eventually reach a point where the chain stabilizes, i.e., that we have found an irreducible factor of .      Let be a PID. Then every nonzero nonunit element of is either irreducible or can be written as a finite product of irreducibles in .    We may perform the analysis from Lemma for all factors of , and thus can be factored into a product of irreducibles.    The second condition that must be satisfied for a domain to be a UFD is that the product of irreducibles must be unique (up to associates). In order to prove that, we will make use of , which states that in PIDs, primes and irreducibles are identical concepts.    Let be a PID and let be irreducible. Let be such that . Then and thus there exist such that .    Assume that is irreducible. Suppose that divides for some and that does not divide . Since is a PID, . Thus there exists such that .      Let be a PID and let . Then is prime if and only if is irreducible.    Assume that is prime. Suppose that for some . Then divides which implies that divides or divides . WLOG, assume that divides . Then there exists such that which implies that . Therefore and is a unit which implies that is irreducible.  Assume that is irreducible. Suppose that divides for some and that does not divide . Then and there exists such that . Multiplying boths sides by yiels which implies that divides and therefore is prime.    Observe that implies that if is a PID and is irreducible with , then or .   Our crucial final step on the road to is the following.    Every PID is a UFD.   For part 2 of the definition, use induction on the number of irreducible divisors of an arbitrary nonzero nonunit. Mimic the proof of .   Let be a PID, and observe that by every nonzero nonunit can be written as a product of irreducibles. We thus need only show that this product is unique (up to associates).  To that end, we adopt the notation of . Let . We perform induction on the number of irreducible factors of . If , then is a unit. If we had for some irreducible , then divides a unit and would thus be a unit itself, which is a contradiction.  Suppose now that and we write where the and are not necessarily distinct irreducibles. Since , we know by that must divide one of the factors.  Renumbering, we may assume that , whence , where must be a unit as is irreducible. Canceling yields By induction on we conclude that each of the irreducible factors on the left matches with precisely one factor on the right (up to associates). This completes the inductive step, and thus the proof.       Every Euclidean domain is a unique factorization domain.     Apply Theorems and .    (Unique Factorization of Polynomials)   Let be a field. Then is a UFD.  That is, if with , then is either irreducible or a product of irreducibles in . What is more, if are two factorizations of into irreducibles , then and after reordering, and are associates.    Handle existence and uniqueness separately. For each, (strong) induction on will work. Or do something entirely different.    Thus, we see that the existence of a well-behaved division algorithm (and a lack of zero divisors) is sufficient to guarantee unique factorization. However, it is not necessary. The following theorem is included for reference, but is not intended to be proved.   Theorem  If is a UFD, then is a UFD.    Thus, is a UFD. That is, every nonconstant polynomial in is either irreducible or can be factored uniquely into a product of irreducibles. However, as we will see later, is not a PID.   "
},
{
  "id": "obj_factorizationEuclideanDomains",
  "level": "2",
  "url": "sec_factorizationEuclideanDomains.html#obj_factorizationEuclideanDomains",
  "type": "Guiding Questions",
  "number": "4.2",
  "title": "Guiding Questions",
  "body": " Guiding Questions   In this section, we'll seek to answer the questions:    What is a unique factorization domain? What examples of UFDs do we possess?  What is the ascending chain condition on ideals? What are Noetherian rings?  What does the ascending chain condition have to do with unique factorization?   "
},
{
  "id": "def-ufd",
  "level": "2",
  "url": "sec_factorizationEuclideanDomains.html#def-ufd",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": " unique factorization domain (UFD)   An integral domain is called a unique factorization domain (or UFD ) if the following conditions hold.   Every nonzero nonunit element of is either irreducible or can be written as a finite product of irreducibles in .    Factorization into irreducibles is unique up to associates. That is, if can be written as for some irreducibles , then and, after reordering, is an associate of .      "
},
{
  "id": "sec_factorizationEuclideanDomains-4-4",
  "level": "2",
  "url": "sec_factorizationEuclideanDomains.html#sec_factorizationEuclideanDomains-4-4",
  "type": "Activity",
  "number": "4.2.1",
  "title": "",
  "body": "  Using as an example, illustrate the definition of UFD by factoring 20 into two sets of different irreducibles which nonetheless can be paired up as associates.   "
},
{
  "id": "sec_factorizationEuclideanDomains-4-6",
  "level": "2",
  "url": "sec_factorizationEuclideanDomains.html#sec_factorizationEuclideanDomains-4-6",
  "type": "Theorem",
  "number": "4.2.2",
  "title": "",
  "body": "  The integers form a UFD.   We have already seen that primes and irreducibles coincide in (see and ). The result follows from the Fundamental Theorem of Algebra.  "
},
{
  "id": "sec_factorizationEuclideanDomains-4-7",
  "level": "2",
  "url": "sec_factorizationEuclideanDomains.html#sec_factorizationEuclideanDomains-4-7",
  "type": "Theorem",
  "number": "4.2.3",
  "title": "",
  "body": "  Every field is a UFD.   There are no nonzero nonunits in a field. The UFD conditions are therefore trivially satisfied.  "
},
{
  "id": "def-noetherian",
  "level": "2",
  "url": "sec_factorizationEuclideanDomains.html#def-noetherian",
  "type": "Definition",
  "number": "4.2.4",
  "title": "",
  "body": "  A commutative ring is called Noetherian if it satisfies the ascending chain condition on ideals. These rings are named in honor of Emmy Noether , one of the preeminent mathematicians of the 20th century. In addition to making substantial contributions to physics, she formalized the axiomatic definition of ring that is still in use today. That is, is Noetherian if whenever is an ascending chain of ideals in , then there exists some for which .   "
},
{
  "id": "sec_factorizationEuclideanDomains-5-4",
  "level": "2",
  "url": "sec_factorizationEuclideanDomains.html#sec_factorizationEuclideanDomains-5-4",
  "type": "Exploration",
  "number": "4.2.2",
  "title": "",
  "body": "  Consider the ideals in and . Find the longest ascending chains of ideals starting first with and then with that you can. When does each chain stabilize?   TBD.  "
},
{
  "id": "theorem-pidisnoetherian",
  "level": "2",
  "url": "sec_factorizationEuclideanDomains.html#theorem-pidisnoetherian",
  "type": "Theorem",
  "number": "4.2.5",
  "title": "",
  "body": "  Every principal ideal domain is Noetherian.    Let and set . Show that is an ideal, and use your assumptions!    It is a straightforward definition check to see that as defined in the hint is an ideal. That we are in a PID means there exists such that . Therefore there exists such that . It follows that and in particular that for all .   "
},
{
  "id": "sec_factorizationEuclideanDomains-5-7",
  "level": "2",
  "url": "sec_factorizationEuclideanDomains.html#sec_factorizationEuclideanDomains-5-7",
  "type": "Corollary",
  "number": "4.2.6",
  "title": "",
  "body": "  Every Euclidean domain is Noetherian.    Every ED is a PID.   "
},
{
  "id": "lem_divisiblebyirred",
  "level": "2",
  "url": "sec_factorizationEuclideanDomains.html#lem_divisiblebyirred",
  "type": "Lemma",
  "number": "4.2.7",
  "title": "",
  "body": "  Let be a principal ideal domain, and a nonzero nonunit. Then is divisible by an irreducible.    Let be reducible and write . Continue to factor reducibles and build an ascending chain of ideals.    Suppose that is not irreducible. Write , where the are nonzero nonunits. Then . If is not irreducible, we may write , where are nonzero nonunits, and observe that .  (If  is irreducible and we nonetheless write , then either if is a unit, or if is associate to .)  Continuing in this way, we may continue to factor the reducible factors of ; since is a PID and thus has the ascending chain condition, we must eventually reach a point where the chain stabilizes, i.e., that we have found an irreducible factor of .   "
},
{
  "id": "thm-writeasprodofirred",
  "level": "2",
  "url": "sec_factorizationEuclideanDomains.html#thm-writeasprodofirred",
  "type": "Theorem",
  "number": "4.2.8",
  "title": "",
  "body": "  Let be a PID. Then every nonzero nonunit element of is either irreducible or can be written as a finite product of irreducibles in .    We may perform the analysis from Lemma for all factors of , and thus can be factored into a product of irreducibles.   "
},
{
  "id": "sec_factorizationEuclideanDomains-6-6",
  "level": "2",
  "url": "sec_factorizationEuclideanDomains.html#sec_factorizationEuclideanDomains-6-6",
  "type": "Lemma",
  "number": "4.2.9",
  "title": "",
  "body": "  Let be a PID and let be irreducible. Let be such that . Then and thus there exist such that .    Assume that is irreducible. Suppose that divides for some and that does not divide . Since is a PID, . Thus there exists such that .   "
},
{
  "id": "thm-primesareirredinPID",
  "level": "2",
  "url": "sec_factorizationEuclideanDomains.html#thm-primesareirredinPID",
  "type": "Theorem",
  "number": "4.2.10",
  "title": "",
  "body": "  Let be a PID and let . Then is prime if and only if is irreducible.    Assume that is prime. Suppose that for some . Then divides which implies that divides or divides . WLOG, assume that divides . Then there exists such that which implies that . Therefore and is a unit which implies that is irreducible.  Assume that is irreducible. Suppose that divides for some and that does not divide . Then and there exists such that . Multiplying boths sides by yiels which implies that divides and therefore is prime.   "
},
{
  "id": "thm_pidisufd",
  "level": "2",
  "url": "sec_factorizationEuclideanDomains.html#thm_pidisufd",
  "type": "Theorem",
  "number": "4.2.11",
  "title": "",
  "body": "  Every PID is a UFD.   For part 2 of the definition, use induction on the number of irreducible divisors of an arbitrary nonzero nonunit. Mimic the proof of .   Let be a PID, and observe that by every nonzero nonunit can be written as a product of irreducibles. We thus need only show that this product is unique (up to associates).  To that end, we adopt the notation of . Let . We perform induction on the number of irreducible factors of . If , then is a unit. If we had for some irreducible , then divides a unit and would thus be a unit itself, which is a contradiction.  Suppose now that and we write where the and are not necessarily distinct irreducibles. Since , we know by that must divide one of the factors.  Renumbering, we may assume that , whence , where must be a unit as is irreducible. Canceling yields By induction on we conclude that each of the irreducible factors on the left matches with precisely one factor on the right (up to associates). This completes the inductive step, and thus the proof.    "
},
{
  "id": "theorem_everyedisufd",
  "level": "2",
  "url": "sec_factorizationEuclideanDomains.html#theorem_everyedisufd",
  "type": "Theorem",
  "number": "4.2.12",
  "title": "",
  "body": "  Every Euclidean domain is a unique factorization domain.   "
},
{
  "id": "sec_factorizationEuclideanDomains-6-12",
  "level": "2",
  "url": "sec_factorizationEuclideanDomains.html#sec_factorizationEuclideanDomains-6-12",
  "type": "Proof",
  "number": "4.2.3.1",
  "title": "",
  "body": " Apply Theorems and .  "
},
{
  "id": "sec_factorizationEuclideanDomains-6-13",
  "level": "2",
  "url": "sec_factorizationEuclideanDomains.html#sec_factorizationEuclideanDomains-6-13",
  "type": "Theorem",
  "number": "4.2.13",
  "title": "(Unique Factorization of Polynomials).",
  "body": " (Unique Factorization of Polynomials)   Let be a field. Then is a UFD.  That is, if with , then is either irreducible or a product of irreducibles in . What is more, if are two factorizations of into irreducibles , then and after reordering, and are associates.    Handle existence and uniqueness separately. For each, (strong) induction on will work. Or do something entirely different.   "
},
{
  "id": "sec_nonuniqueFactorization",
  "level": "1",
  "url": "sec_nonuniqueFactorization.html",
  "type": "Section",
  "number": "4.3",
  "title": "Principal Ideals and Euclidean Domains",
  "body": " Principal Ideals and Euclidean Domains   Guiding Questions   In this section, we'll seek to answer the questions:    How can unique factorization fail, and why does it matter?  What is an example of a nonatomic domain?  What is an example of an element that does not factor uniquely into a product of irreducibles?    Despite the evidence to the contrary, not every ring has the unique factorization property. That is, there are commutative rings with identity which are not UFDs. In fact, the failure of certain rings in algebraic number theory to have the unique factorization property played a role in several failed attempts to prove Fermat's Last Theorem, which says that there are no nontrivial integer solutions to the equation if . Pierre de Fermat famously claimed that he had a marvelous proof of this fact, but the margin of the book in which he was writing was too narrow to contain it. Fermat's supposed proof was never found, and many now doubt that he had one. The search for a valid proof would not be complete until the work of Andrew Wiles and Richard Taylor in the mid-1990s.  In 1847, Gabriel Lamé claimed he had completely solved the problem. His solution relied on the factorization of , where is an odd prime, as , where is a primitive -th root of unity in . However, the ring is not a unique factorization domain.  There are two ways that unique factorization in an integral domain can fail: there can be a failure of a nonzero nonunit to factor into irreducibles, or there can be nonassociate factorizations of the same element. We investigate each in turn.   A non-atomic domain   We say an integral domain is atomic if every nonzero nonunit can be written as a finite product of irreducibles in . The term atom was suggested by Paul Cohn as a synonym for irreducible. In this exploration, we encounter a non-atomic domain.  Let the set of polynomials with integer constant terms and rational coefficients.   Convince yourself that is an integral domain. You do not need to prove it in detail, but you should at least argue that is closed under the usual polynomial addition and multiplication, and that is a domain.  Describe the irreducibles in .  Use the notion of degree to argue that any factorization of in has the form   Explain why the factorization in the previous part cannot lead to a factorization of into irreducibles in .    TBD.   We now explore the atomic domain . As we will see, even when a nonzero nonunit can be written as a product of irreducibles, it may be the case that this factorization is not unique.    Verify that .    Next, we develop a multiplicative function which enables us to explore the multiplicative properties of .    Define by . Then for all , .      An element is a unit if and only if .     Observe that is a unit if and only if for some , which menas that , so .     There do not exist such that .     Suppose there exist such that . Then we must have , which means that , a contradiction.     The elements 2, , and are irreducible in . We conclude that is not a UFD.     Suppose . Then . By the lemma, we may not have , which means without loss of generality that , and thus is a unit. Therefore, 2 is irreducible.  Now suppose that . Then . The possible values for are 1, 2, 4, and 8. If or 8, then is irreducible, as either or is necessarily a unit. By the lemma, we may not have or , so in fact either or 8. Therefore, is irreducible.  Since we have factored 8 into two different products of irreducibles, is not a UFD.   "
},
{
  "id": "obj_nonuniqueFactorization",
  "level": "2",
  "url": "sec_nonuniqueFactorization.html#obj_nonuniqueFactorization",
  "type": "Guiding Questions",
  "number": "4.3",
  "title": "Guiding Questions",
  "body": " Guiding Questions   In this section, we'll seek to answer the questions:    How can unique factorization fail, and why does it matter?  What is an example of a nonatomic domain?  What is an example of an element that does not factor uniquely into a product of irreducibles?   "
},
{
  "id": "sec_nonuniqueFactorization-6",
  "level": "2",
  "url": "sec_nonuniqueFactorization.html#sec_nonuniqueFactorization-6",
  "type": "Exploration",
  "number": "4.3.1",
  "title": "A non-atomic domain.",
  "body": " A non-atomic domain   We say an integral domain is atomic if every nonzero nonunit can be written as a finite product of irreducibles in . The term atom was suggested by Paul Cohn as a synonym for irreducible. In this exploration, we encounter a non-atomic domain.  Let the set of polynomials with integer constant terms and rational coefficients.   Convince yourself that is an integral domain. You do not need to prove it in detail, but you should at least argue that is closed under the usual polynomial addition and multiplication, and that is a domain.  Describe the irreducibles in .  Use the notion of degree to argue that any factorization of in has the form   Explain why the factorization in the previous part cannot lead to a factorization of into irreducibles in .    TBD.  "
},
{
  "id": "sec_nonuniqueFactorization-8",
  "level": "2",
  "url": "sec_nonuniqueFactorization.html#sec_nonuniqueFactorization-8",
  "type": "Activity",
  "number": "4.3.2",
  "title": "",
  "body": "  Verify that .   "
},
{
  "id": "sec_nonuniqueFactorization-10",
  "level": "2",
  "url": "sec_nonuniqueFactorization.html#sec_nonuniqueFactorization-10",
  "type": "Theorem",
  "number": "4.3.1",
  "title": "",
  "body": "  Define by . Then for all , .   "
},
{
  "id": "sec_nonuniqueFactorization-11",
  "level": "2",
  "url": "sec_nonuniqueFactorization.html#sec_nonuniqueFactorization-11",
  "type": "Theorem",
  "number": "4.3.2",
  "title": "",
  "body": "  An element is a unit if and only if .   "
},
{
  "id": "sec_nonuniqueFactorization-12",
  "level": "2",
  "url": "sec_nonuniqueFactorization.html#sec_nonuniqueFactorization-12",
  "type": "Proof",
  "number": "4.3.1",
  "title": "",
  "body": " Observe that is a unit if and only if for some , which menas that , so .  "
},
{
  "id": "sec_nonuniqueFactorization-13",
  "level": "2",
  "url": "sec_nonuniqueFactorization.html#sec_nonuniqueFactorization-13",
  "type": "Lemma",
  "number": "4.3.3",
  "title": "",
  "body": "  There do not exist such that .   "
},
{
  "id": "sec_nonuniqueFactorization-14",
  "level": "2",
  "url": "sec_nonuniqueFactorization.html#sec_nonuniqueFactorization-14",
  "type": "Proof",
  "number": "4.3.2",
  "title": "",
  "body": " Suppose there exist such that . Then we must have , which means that , a contradiction.  "
},
{
  "id": "sec_nonuniqueFactorization-15",
  "level": "2",
  "url": "sec_nonuniqueFactorization.html#sec_nonuniqueFactorization-15",
  "type": "Theorem",
  "number": "4.3.4",
  "title": "",
  "body": "  The elements 2, , and are irreducible in . We conclude that is not a UFD.   "
},
{
  "id": "sec_nonuniqueFactorization-16",
  "level": "2",
  "url": "sec_nonuniqueFactorization.html#sec_nonuniqueFactorization-16",
  "type": "Proof",
  "number": "4.3.3",
  "title": "",
  "body": " Suppose . Then . By the lemma, we may not have , which means without loss of generality that , and thus is a unit. Therefore, 2 is irreducible.  Now suppose that . Then . The possible values for are 1, 2, 4, and 8. If or 8, then is irreducible, as either or is necessarily a unit. By the lemma, we may not have or , so in fact either or 8. Therefore, is irreducible.  Since we have factored 8 into two different products of irreducibles, is not a UFD.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Appendix",
  "number": "A",
  "title": "List of Symbols",
  "body": " List of Symbols   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
